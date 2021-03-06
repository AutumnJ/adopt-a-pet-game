import fetch from 'isomorphic-fetch';
import StockKitty from '../lib/StockKitty.png'

// Test data:
// import { staticCats } from '../data'

//action creators 

const addCats = (cats) => {
  return {
    type: "CREATE_CAT",
    payload: cats
  };
};

const getCat = (cat) => {
  return {
    type: "RANDOM_CAT",
    payload: cat
  };
};

export const adoptCat = (cat) => {
  return {
    type: 'ADOPT_CAT',
    payload: cat
  };
}

export const playGame = () => {
  return {
    type: 'PLAY_CAT_GAME',
  };
}

export const clearGame = () => {
  return {
    type: 'CLEAR_CAT_GAME'
  }
}

export const updatePhoto = (cat, photo) => {
  return {
    type: 'UPDATE_CAT_PHOTO',
    payload: cat,
    update: photo
  };
}

// map external API return prior to Rails API POST
const mapCats = (cats) => {
  let catList = cats.petfinder.pets.pet

  const mappedList = catList.map(cat => {
    let catObj = {};
    let photo = cat.media.photos ? cat.media.photos.photo[3].$t : StockKitty;

    catObj.name = cat.name.$t;
    catObj.age = cat.age.$t;
    catObj.size = cat.size.$t;
    catObj.sex = cat.sex.$t;
    catObj.breed = cat.breeds.breed.$t;
    catObj.contact_phone = cat.contact.phone.$t;
    catObj.contact_email = cat.contact.email.$t;
    catObj.contact_city = cat.contact.city.$t + ' ' + cat.contact.state.$t;
    catObj.photo = photo;
    catObj.description = cat.description.$t;

    return catObj;
  })
  return mappedList;
}

// Rails API POST
const createCat = (cat) => {
  return fetch(`http://localhost:3001/cats`, {
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

// thunk action creators/async actions -> inner function is called and given ref to dispatch

// External API fetch
export const fetchCats = (zip) => {
  return dispatch => {
    return fetch(`${process.env.REACT_APP_EXTERNAL_API_URL}&location=${zip}&format=json&animal=cat&count=16`)
      .then(response => response.json())
      .then(function(cats) {
        let mappedResponse = mapCats(cats);
        return mappedResponse
      })
      .then(async (mappedResponse) => {
        let kitties = await Promise.all(mappedResponse.map((cat) => {
          return createCat(cat);
        }))
        return kitties
      })
      .then(function(kitties) {
          dispatch(addCats(kitties))
        })
      .then(function() {
        dispatch(clearGame())
      })
      .then(function() {
        dispatch(playGame())
      })
      .catch(error => window.alert("Not enough kitties - try a different zip code!"));
  };
};

// Internal API fetch
export const fetchRandomCat = () => {
  return dispatch => {
    return fetch(`http://localhost:3001/cats/random`)
      .then(response => response.json())
      .then(cat => dispatch(getCat(cat)))
      .catch(error => console.log(error));
  };
};


// Dispatch with test data from internal file
// export const fetchCats = () => {
//   return dispatch => {
//       dispatch(addCats(staticCats))
//     }
// };