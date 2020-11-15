import React from 'react';
import {Hello} from './Hello';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

export const App = () => {
  return (
    <div className={App.name}>
      <ApolloProvider client={client}>
        <Hello />
      </ApolloProvider>
    </div>
  );
};
