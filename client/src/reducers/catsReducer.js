export default function catsReducer(state = {cats:[], randomCat:[], adoptedCats: [], catGame:[]}, action) {
  switch (action.type) {
    case 'CREATE_CAT':
      //want to replace previous state, not concat onto it
      return Object.assign ({}, { ...state, cats: action.payload})
    case 'ADD_CAT':
      //want to replace previous state, not concat onto it
      return Object.assign ({}, { ...state, randomCat: action.payload })
    case 'ADOPT_CAT':
      return {...state, adoptedCats: state.adoptedCats.concat(action.payload)} 
    case 'CLEAR_CAT_GAME':
      return Object.assign({}, {...state, adoptedCats: [], catGame: []})
    case 'PLAY_CAT_GAME':
      let newArray = []

      state.cats.forEach(cat => {
        newArray.push(Object.assign({}, cat))
      })
      return Object.assign ({}, { ...state, catGame: newArray})
    default:
      return state;
  }
}
