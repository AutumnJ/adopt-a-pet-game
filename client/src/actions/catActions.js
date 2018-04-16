import fetch from 'isomorphic-fetch';

// const getCats = (cats) => {
//   return {
//     type: "GET_CATS",
//     payload: cats
//   };
// };

const addCat = (cat) => {
  //I think this is a promise resolution issue?
  console.log("in add cat action")
  console.log(cat)
  return {
    //update reducer so cat is added to state when it is persisted to DB
    type: "CREATE_CAT",
    payload: cat
  };
};

const postCats = (cats) => {
  //define function to parse/map cats? or define in var
  return fetch(//post each cat to internal API)
    //after cats are posted to internal API, fetch cats from internal API
    //then run getCats action
  )
}

//Map cats to an array of objects, then send each object to create cat 

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
const createCat = (cat) => {
  // return dispatch => {
    return fetch(`http://localhost:3001/users/1/cats`, {
      method: "POST",
      // mode: 'no-cors',
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify(cat)
    })
    .then(response => response.json())
      // .then(function (response) {
      //   return response.json();
      // })
  // //     .then(response => console.log(response))
  //     .then(cat => new Promise(function(resolve, reject) {
  //       dispatch(addCat(cat))

  //       setTimeout(() => {
  //         resolve(cat);
  //       }, 5000);
  //     }))
      // .then(cat => dispatch(addCat(cat)));
      // })
      // .catch(error => console.log(error));
  // };
}

//Fix hard-coded location
//need to assign unique ID to user in view and pass it in as part of state 
export const fetchCats = () => {
  return dispatch => {
    return fetch(`${process.env.REACT_APP_EXTERNAL_API_URL}&location=60625&format=json&animal=cat&count=16`)
      .then(response => response.json())
      .then(function(cats) {
        let mappedResponse = mapCats(cats);
        return mappedResponse
      })
      // .then(cats => mapCats(cats))
      // .then(cats => new Promise(function(resolve, reject) {
      //   let catList = mapCats(cats);

      //   setTimeout(() => {
      //     resolve(cats);
      //   }, 5000);
      // }))

      //THIS WORKS BUT IS FIRING BEFORE THE FETCH HAS FINISHED. 
      .then(function(mappedResponse) {
        let kitties = []
        mappedResponse.forEach(cat => {
          kitties.push(createCat(cat));
        })
        return kitties
      })
      .then(function(kitties) {
        kitties.forEach(cat => {
          dispatch(addCat(cat))
        })
      })
      // .then(mappedResponse => mappedResponse.forEach(cat => { 
      //   createCat(cat);
      // }))
      // .then(cats => mapCats(cats))
      // .then(cats => dispatch(getCats(cats)))
      .catch(error => console.log(error));
  };
};

//need to find out how to keep key in .env