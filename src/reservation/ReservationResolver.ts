import { Arg, Query, Resolver } from "type-graphql";

import Reservation, { ReservationHistory } from "./ReservationType";
import ReservationService from "./ReservationService";

@Resolver(Reservation)
export default class ReservationResolver {
    @Query(returns => [Reservation])
    async reservation() {
        return await ReservationService.findAll();
    }

    @Query(returns => ReservationHistory)
    async reservationHistory(
        @Arg("ownerId") ownerId: number
    ) {
        if (ownerId <= 0 || isNaN(ownerId)) {
          throw new Error("Invalid ownerId");
        }
        
        let upcoming = await ReservationService.getUpcomingReservations(ownerId)

        if (!upcoming) {
            throw new Error("Can't get upcoming reservations");
        }

        let past = await ReservationService.getPastReservations(ownerId)
        if (!past) {
            throw new Error("Can't get past reservations");
        }
        return {
            UpcomingReservations: upcoming,
            PastReservations: past
        }
    }
}

