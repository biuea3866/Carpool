import  { gql } from 'apollo-server-express';

const typeDefs = gql`
    input GetRiderInfoInput {
        riderId: String!
    } 

    input CheckEmailInput {
        email: String!
    }

    input CheckNicknameInput {
        nickname: String!
    }

    input LoginUserInput {
        email: String!,
        password: String!
    }

    input RegisterUserInput {
        email: String!,
        password: String!,
        nickname: String!,
        license: LicenseInput
    }

    input ModifyUserInput {
        password: String,
        nickname: String,
        license: LicenseInput
    }

    input DeleteUserInput {
        isDelete: Boolean!
    }

    input LicenseInput {
        birthDate: String,
        name: String,
        licNumber: String
    }
`;

export default typeDefs;