import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type Mutation {
        loginUser(loginUserInput: LoginInput!): Response!
        logoutUser: Response!
        register(registerUserInput: RegisterInput!): Response!
        modifyUser(modifyUserInput: ModifyInput!): Response!
        deleteUser(deleteUserInput: DeleteInput!): Response!
    }
`;

export default typeDefs;