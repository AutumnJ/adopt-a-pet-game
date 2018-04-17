export default function catsReducer(state: cats = [], action) {
  switch (action.type) {
    // case 'LOADING_CATS':
    //   return Object.assign({}, state, { loading: true })
    // case 'GET_CATS':
    //   return Object.assign({}, state, { loading: false, cats: action.payload })
    case 'CREATE_CAT':
      return {...state, cats: state.concat(action.payload)}
    default:
      return state;
  }
}