import { StripTypeScriptTypesOptions } from "module"
import { Field, ID, ObjectType } from "type-graphql"
import Reservation from "../reservation/ReservationType"

@ObjectType()
export class OwnerRole {
    @Field(type => ID)
    OwnerId: number
    @Field(type => ID)
    RoleId: number
}

@ObjectType()
class Owner {
    @Field(type => ID)
    Id: number
    
    @Field()
    number: string

    @Field()
    givenName: string

    @Field()
    surname: string

    @Field()
    email: string

    @Field()
    username: string

    @Field()
    phoneNumber: string

    @Field()
    zipCode: string

    @Field()
    ping: number

    @Field()
    dateCreated: Date

    @Field()
    dateModified: Date

    @Field()
    hasActiveContract: number
}

export default Owner