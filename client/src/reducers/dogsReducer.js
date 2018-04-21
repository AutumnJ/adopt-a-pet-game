export default function dogsReducer(state = {dogs:[], randomDog: [], adoptedDogs: [], dogGame:[]}, action) {
  switch (action.type) {
    case 'CREATE_DOG':
      return Object.assign ({}, { ...state, dogs: action.payload })
    case 'ADD_DOG':
      return Object.assign ({}, { ...state, randomDog: action.payload })
    case 'ADOPT_DOG':
      return {...state, adoptedDogs: state.adoptedDogs.concat(action.payload)} 
    case 'CLEAR_GAME':
      return Object.assign({}, {...state, adoptedDogs: [], dogGame: []})
    case 'PLAY_GAME':
      let newArray = []

      state.dogs.forEach(dog => {
        newArray.push(Object.assign({}, dog))
      })
      return Object.assign ({}, { ...state, dogGame: newArray})
    default:
      return state;
  }
}
