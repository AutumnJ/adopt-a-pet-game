export default function catsReducer(state = {cats:[], randomCat:[]}, action) {
  switch (action.type) {
    // case 'LOADING_CATS':
    //   return Object.assign({}, state, { loading: true })
    // case 'GET_CATS':
    //   return Object.assign({}, state, { loading: false, cats: action.payload })
    case 'CREATE_CAT':
      return Object.assign ({}, { ...state, cats: action.payload })
    case 'ADD_CAT':
      return Object.assign ({}, { ...state, randomCat: action.payload })
    default:
      return state;
  }
}