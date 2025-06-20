import { Field, ID, ObjectType } from "type-graphql"
import Owner from "../owner/OwnerType"

@ObjectType()
class Reservation {
    @Field(type => ID)
    ReservationId: number

    @Field()
    Checkin: Date
    
    @Field()
    Checkout: Date

    @Field({ nullable: true })
    SiteName: string

    @Field({ nullable: true })
    Status: string

    @Field({ nullable: true })
    OwnerId: number

    @Field({ nullable: true })
    dateCreated: Date

    @Field({ nullable: true })
    dateModified: Date
}

export default Reservation