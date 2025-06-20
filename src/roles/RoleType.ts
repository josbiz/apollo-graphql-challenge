import { Field, ID, ObjectType } from "type-graphql"

@ObjectType()
class Role {
    @Field(type => ID)
    Id: number

    @Field()
    description: string
    
    @Field()
    type: string
}

export default Role