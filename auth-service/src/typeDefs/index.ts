import queries from './query';
import mutations from './mutation';
import types from './type';
import inputs from './input';
import enums from './enum';
import { mergeTypeDefs } from '@graphql-tools/merge';

const typeDefs = mergeTypeDefs([
    queries,
    mutations,
    types,
    inputs,
    enums
]);

export { typeDefs };