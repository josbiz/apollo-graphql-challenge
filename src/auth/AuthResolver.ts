import { Arg, Mutation, Resolver } from "type-graphql";
import jwt from "jsonwebtoken";
import {config} from "dotenv";

import AuthService from "./AuthService"
import OwnerService from "../owner/OwnerService";
import RoleService from "../roles/RoleService";

config();

@Resolver()
export class AuthResolver {
  @Mutation(() => String)
  async getOwnerToken(
    @Arg("email") email: string,
    @Arg("ownerNumber") ownerNumber: string
  ): Promise<string> {
    const [rows] = await AuthService.getOwnerData(email, ownerNumber)

    const owner = rows;

    if (!owner) {
      throw new Error("Invalid owner credentials");
    }

    const [ownerRole] = await OwnerService.findOwnerRoleById(owner.Id);

    if (!ownerRole) {
      throw new Error("Can't find Owner Role");
    }

    const [userRoles] = await RoleService.findById(ownerRole.RoleId)

    if (!ownerRole) {
      throw new Error("Can't find Role");
    }

    const payload = {
      ownerId: owner.Id,
      ownerNumber: owner.ownerNumber,
      email: owner.email,
      userRoles: [{
        "role": userRoles.type
      }],
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET!);

    return token;
  }
}
