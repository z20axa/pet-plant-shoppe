import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        password
      }
    }
  }
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      email
      password
    }
  }
}
`;

export const ADD_ORDER = gql`
  mutation addOrder($plants: [ID]!) {
    addOrder(plants: $plants) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
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
mutation AddFavorite($plantId: ID!) {
  addFavorite(plantId: $plantId) {
    _id
    plant {
      _id
    }
  }
}
`

export const REMOVE_FAV = gql`
mutation removeFav($plantId: ID!) {
  removeFavorite(plantId: $plantId) {
    _id
  }
}
`

