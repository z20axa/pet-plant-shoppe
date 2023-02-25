import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        token
      }
    }
  }
`;

export const ADD_USER = gql`
mutation login ($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    user {
      username
    }
    token
  }
}
`;



export const ADD_COMMENT = gql`
mutation addComment ($plantId: ID!, $commentText: String!) {
  addComment(plantId: $plantId, comment_text: $commentText) {
    _id
    name
  }
}
`;

export const ADD_FAV = gql`
mutation addFavorite 
`