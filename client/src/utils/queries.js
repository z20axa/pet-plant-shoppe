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
query InStore($inStore: String!) {
  inStore(inStore: $inStore) {
    name
    soilRequirement
    air
    animalSafe
    careLevel
    description
    growthHabit
    light
    price
  }
}
`;
// search by animal - will bring alll results for dogs or cats or both
export const BY_ANIMAL = gql`
query byAnimal($animalSafe: String!) {
  specificPlantA(animalSafe: $animalSafe) {
    name
  }
}
`;

// display list of favorites per user logged in
export const LIST_FAV_ONEUSER = gql`
query User($username: String!) {
  user(username: $username) {
    plant {
      name
    }
  }
}
`;
// search by plant name - will bring results if it is safe or not and for what animal
export const SAFE_BY_NAME = gql`
query searchByName($name: String!) {
  specificPlantS(name: $name) {
    name
    animalSafe
  }
}
`;



