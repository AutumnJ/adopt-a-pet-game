export default function dogsReducer(state = {dogs:[], randomDog: []}, action) {
  switch (action.type) {
    // case 'LOADING_CATS':
    //   return Object.assign({}, state, { loading: true })
    // case 'GET_CATS':
    //   return Object.assign({}, state, { loading: false, cats: action.payload })
    case 'CREATE_DOG':
      return Object.assign ({}, { ...state, dogs: action.payload })
    case 'ADD_DOG':
      return Object.assign ({}, { ...state, randomDog: action.payload })
    default:
      return state;
  }
}

//delete dogs -> fire action from which page?
//