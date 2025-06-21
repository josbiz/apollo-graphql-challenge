import { Field, ID, ObjectType } from "type-graphql"

@ObjectType()
export class RemainingPoints {
    @Field()
    TotalAmount: number

    @Field(type => [ContractUsageDetails])
    ContractUsageDetails: ContractUsageDetails[]
}

@ObjectType()
class ContractUsageDetails {
    @Field()
    UsageTypeDescription: string

    @Field()
    TotalAmountPoints: number
}