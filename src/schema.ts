import { buildSchema } from "type-graphql"
import { startStandaloneServer } from '@apollo/server/standalone';
import { ApolloServer } from "@apollo/server";

import RoleResolver from "./roles/RoleResolver"
import { AuthResolver } from "./auth/AuthResolver";
import ReservationResolver from "./reservation/ReservationResolver";

export default async function bootstrap () {
    const schema = await buildSchema({
        resolvers: [RoleResolver, AuthResolver, ReservationResolver],
    })
    const server = new ApolloServer({
        schema,
    });

    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    });

    console.log(`🚀  Server ready at: ${url}`);
}

