import { gql } from '@apollo/client';

export const ALL_PLANTS = gql`
query Plants {
  plants {
    name
    description
    careLevel
    animalSafe
    light
    price
  }
}
`;

export const ANIMAL_SAFE = gql`
query ANIMALSAFE ($name: String) {
  specificPlant(name: $name) {
    _id
    name
    animalSafe

  }
}
`;


export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        thoughtAuthor
        createdAt
      }
    }
  }
`;
