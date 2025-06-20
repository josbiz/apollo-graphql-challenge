import { Arg, Query, Resolver } from "type-graphql";

import Reservation from "./ReservationType";
import ReservationService from "./ReservationService";

@Resolver(Reservation)
export default class ReservationResolver {
    @Query(returns => [Reservation])
    async roles() {
        return await ReservationService.findAll();
    }
}

