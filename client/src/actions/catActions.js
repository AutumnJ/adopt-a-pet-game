import fetch from 'isomorphic-fetch';
import { staticCats } from '../data'

//After organized, comment back in external API fetch, internal API data persistence and addCat action

//DON'T NEED THIS CURRENTLY:
// const getCats = (cats) => {
//   return {
//     type: "GET_CATS",
//     payload: cats
//   };
// };

// export const clearState = () => {
//   return {
//     type: "CLEAR_STATE",
//     //need to also fire async action to remove from db
//     //need to add to dogs
//   }
// }

const addCat = (cat) => {
  return {
    type: "CREATE_CAT",
    payload: staticCats
  };
};

const mapCats = (cats) => {
  let catList = cats.petfinder.pets.pet

  const mappedList = catList.map(cat => {
    let catObj = {};

    catObj.name = cat.name.$t;
    catObj.age = cat.age.$t;
    catObj.size = cat.size.$t;
    catObj.sex = cat.sex.$t;
    catObj.breed = cat.breeds.breed.$t;
    catObj.contact_phone = cat.contact.phone.$t;
    catObj.contact_email = cat.contact.email.$t;
    catObj.contact_city = cat.contact.city.$t;
    catObj.photo = cat.media.photos.photo[3].$t;
    // catObj.user_id = userId;
    catObj.description = cat.description.$t;

    return catObj;
  })
  return mappedList;
}

//Fix hard-coded userId
//move URL into .env
const createCat = (cat) => {
  return fetch(`http://localhost:3001/users/1/cats`, {
    method: "POST",
    headers: {
      "Accept":"application/json",
      "Content-Type":"application/json"
    },
    body: JSON.stringify(cat)
  })
  .then(response => response.json())
  .catch(error => console.log(error));

}

//Fix hard-coded location
//Need to assign User_id at some point - in view? in mapping action? and set in state by setting it as action.payload.user_id?

//Comment the below back in to start pulling from external API

// export const fetchCats = () => {
//   return async dispatch => {
//     return fetch(`${process.env.REACT_APP_EXTERNAL_API_URL}&location=60625&format=json&animal=cat&count=5`)
//       .then(response => response.json())
//       .then(function(cats) {
//         let mappedResponse = mapCats(cats);
//         return mappedResponse
//       })
//       .then(async (mappedResponse) => {
//         let kitties = await Promise.all(mappedResponse.map((cat) => {
//           return createCat(cat);
//         }))
//         return kitties
//       })
//       .then(function(kitties) {
//         kitties.forEach(cat => {
//           dispatch(addCat(cat))
//         })
//       })
//       .catch(error => console.log(error));
//   };
// };

//from the below, it looks like I can dispatch all the cats at once, in the above fetch 
//fire off action to clean current state as well & remove items from DB
//ONLY USING THIS TO DISPATCH USING MY DATA FILE:
export const fetchCats = () => {
  return dispatch => {
      dispatch(addCat())
    }
};