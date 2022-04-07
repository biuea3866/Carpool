import { gql } from 'apollo-server-express';

const typeDefs = gql`
    enum Role {
        PASSENGER,
        DRIVER
    }
`;

export default typeDefs;