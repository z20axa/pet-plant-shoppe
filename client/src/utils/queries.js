import { gql } from '@apollo/client';
// shows all plants
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
// shows only plants we sell
export const IN_STORE = gql`
query InStore {
  inStore {
    name
    imageUrl
    _id
  }
}
`;

// search by animal - will bring alll results for dogs or cats or both
export const BY_ANIMAL = gql`
query SpecificPlantA($animalSafe: String!) {
  specificPlantA(animalSafe: $animalSafe) {
    name
  }
}
`;

//search by name of the plant  - will tell if it is safe or not
export const BY_PLANTNAME = gql`
query searchByName($name: String) {
  specificPlantS(name: $name) {
    name
    animalSafe
  }
}
`
;

// finds plant by ID
export const FIND_PLANT =gql`
query Plant($plantId: ID!) {
  plant(plantId: $plantId) {
    _id
    air
    careLevel
    animalSafe
    description
    growthHabit
    light
    name
    price
    soilRequirement
    imageUrl
  }
}
`

export const ME = gql`
query me{
 me {
   _id
   email
   username
   plant {
     _id
     air
     animalSafe
     plantAuthor
     description
     name
   }
 }
}
`




