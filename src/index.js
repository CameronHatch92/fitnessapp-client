import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Provider } from 'react-redux';
import store from './store';
import './reset.css';
import './index.css';
import App from './App';

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>
  ,
  document.getElementById('root'));


