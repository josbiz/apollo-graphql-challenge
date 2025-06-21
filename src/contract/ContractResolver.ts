import { Arg, Query, Resolver } from "type-graphql";

import {RemainingPoints} from "./ContractType"
import ContractService from "./ContractService";

@Resolver(RemainingPoints)
export default class ContractResolver {
  @Query(returns => RemainingPoints)
  async reservationHistory(
    @Arg("ownerId") ownerId: number
  ) {
    if (ownerId <= 0 || isNaN(ownerId)) {
      throw new Error("Invalid ownerId");
    }

    const contractInfo = await ContractService.getContractInfo(ownerId);

    if (!contractInfo) {
      throw new Error("Can't get contract info");
    }

    const totalPointsRemaining = contractInfo.reduce((acc, detail) => acc + detail.TotalPointsRemaining, 0);

    return {
    TotalAmount: totalPointsRemaining,
    ContractUsageDetails: contractInfo.map((detail) => ({
        UsageTypeDescription: detail.UsageTypeDesc,
        TotalAmountPoints: detail.TotalPointsRemaining,
    })),
    };
  }
}
