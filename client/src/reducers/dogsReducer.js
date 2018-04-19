export default function dogsReducer(state = {dogs:[]}, action) {
  switch (action.type) {
    // case 'LOADING_CATS':
    //   return Object.assign({}, state, { loading: true })
    // case 'GET_CATS':
    //   return Object.assign({}, state, { loading: false, cats: action.payload })
    case 'CREATE_DOG':
      return Object.assign ({}, { dogs: action.payload })
    case 'CLEAR_STATE':
      return { dogs:[] }
    default:
      return state;
  }
}

//delete dogs -> fire action from which page?
//