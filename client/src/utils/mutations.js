import { gql } from '@apollo/client';
//mutation to get tocke for existing user at login
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
// mutation to create new user
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
// mutation  to create order - future development
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


// add cooment to plants - future development for 3Paws page

export const ADD_COMMENT = gql`
mutation addComment ($plantId: ID!, $commentText: String!) {
  addComment(plantId: $plantId, comment_text: $commentText) {
    _id
    name
  }
}
`;
 
// creates list of favorites for the user
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
// removed favorite - need to add function and button - future development
export const REMOVE_FAV = gql`
mutation removeFav($plantId: ID!) {
  removeFavorite(plantId: $plantId) {
    _id
  }
}
`

