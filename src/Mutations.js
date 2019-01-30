import gql from 'graphql-tag';

export const LOGIN_USER = gql `
mutation LoginMutation($email: String!, $password: String!){
  login(email: $email, password: $password)
}
`;