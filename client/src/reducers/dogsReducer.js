export default function dogsReducer(state = {dogs:[], randomDog: [], adoptedDogs: [], dogGame:[]}, action) {
  switch (action.type) {
    case 'CREATE_DOG':
      return Object.assign ({}, { ...state, dogs: action.payload })
    case 'ADD_DOG':
      return Object.assign ({}, { ...state, randomDog: action.payload })
    case 'ADOPT_DOG':
      return {...state, adoptedDogs: state.adoptedDogs.concat(action.payload)} 
    case 'CLEAR_DOG_GAME':
      return Object.assign({}, {...state, adoptedDogs: [], dogGame: []})
    case 'PLAY_DOG_GAME':
      let newArray = []

      state.dogs.forEach(dog => {
        newArray.push(Object.assign({}, dog))
      })
      return Object.assign ({}, { ...state, dogGame: newArray})
    case 'UPDATE_DOG_PHOTO':
      const dog = Object.assign({}, action.payload)
      //or could do action.payload.photo = action.update and return state
      //but that incorrectly modifies the existing object 
      dog.photo = action.update;
      const index = state.dogGame.findIndex(d => d.id === dog.id);

      return {...state, dogGame: [...state.dogGame.slice(0, index), dog, ...state.dogGame.slice(index + 1)]}
    default:
      return state;
  }
}
