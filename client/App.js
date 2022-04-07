import React from 'react';
import MainNavigator from './src/navigator/MainNavigator';
import { ApolloProvider } from '@apollo/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './src/modules/reducer';
import client from './src/modules/apollo/index';

const store = createStore(rootReducer);

const App = () => {
    return (
        <ApolloProvider client={ client }>
            <Provider store={ store }>
                <MainNavigator />
            </Provider>
        </ApolloProvider>
    );
};

export default App;