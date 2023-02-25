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


