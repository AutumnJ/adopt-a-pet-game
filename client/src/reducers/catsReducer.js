export default function catsReducer(state = {cats:[], randomCat:[]}, action) {
  switch (action.type) {
    case 'CREATE_CAT':
      //want to replace previous state, not concat onto it
      return Object.assign ({}, { ...state, cats: action.payload })
    case 'ADD_CAT':
      //want to replace previous state, not concat onto it
      return Object.assign ({}, { ...state, randomCat: action.payload })
    default:
      return state;
  }
}