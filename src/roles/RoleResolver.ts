import { Arg, Query, Resolver } from "type-graphql";

import Role from "./RoleType";
import RoleService from "./RoleService";

@Resolver(Role)
export default class RoleResolver {
    @Query(returns => [Role])
    async roles() {
        return await RoleService.findAll();
    }
}

