import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type User @key(fields: "user_id") {
        email: String!,
        password: String!
        nickname: String!
        createdAt: String!
        role: Role!
        license: License
        userId: ID!
        isDelete: Boolean!
    }
    
    type License {
        birthDate: String!,
        name: String!,
        licNumber: String!
    }

    type Response {
        code: Int!,
        message: String!,
        payload: AuthPayload!
    }

    union AuthPayload = User | String | Int;
`;

export default typeDefs;