import { buildSubgraphSchema } from '@apollo/subgraph';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import http from 'http';
import cors from 'cors';
import { PORT } from './config/env.variable';
import mongoose from 'mongoose';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers/resolver';

class Server {
    constructor() {}

    public async start(
        typeDefs,
        resolvers
    ) {
        const app: express.Application = express();
        const httpServer = http.createServer(app);
        const server: ApolloServer = new ApolloServer({
            schema: buildSubgraphSchema([{
                typeDefs,
                resolvers
            }]),
            context: ({ req }) => {
                const token: string | string[] | null = req.headers.token ? req.headers.token : null;
                
                return token;
            },
            plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
        });

        app.use(cors());

        await server.start();

        server.applyMiddleware({
            app,
            path: '/auth-service',
            cors: false
        });

        httpServer.listen({ port: PORT });

        mongoose;

        console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
    }
}

const server = async (
    typeDefs,
    resolvers
) => await new Server().start(
    typeDefs,
    resolvers
);

server(
    typeDefs,
    resolvers
);