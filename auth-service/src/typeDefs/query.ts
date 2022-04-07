import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type Query {
        getUser: Response! 
        getRiderInfo(getRiderInfoInput: GetRiderInfoInput): Response!
        checkEmail(checkEmailInput: CheckEmailInput!): Response!
        checkNickname(checkNicknameInput: CheckNicknameInput!): Response!
    }
`;

export default typeDefs;