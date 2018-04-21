export default function dogsReducer(state = {dogs:[], randomDog: [], adoptedDogs: []}, action) {
  switch (action.type) {
    case 'CREATE_DOG':
      return Object.assign ({}, { ...state, dogs: action.payload })
    case 'ADD_DOG':
      return Object.assign ({}, { ...state, randomDog: action.payload })
    default:
      return state;
  }
}
