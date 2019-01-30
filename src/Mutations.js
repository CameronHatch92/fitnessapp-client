import gql from 'graphql-tag';

export const LOGIN_USER = gql `
mutation LoginMutation($username: String!, $password: String!){
  login(username: $username, password: $password)
}
`;