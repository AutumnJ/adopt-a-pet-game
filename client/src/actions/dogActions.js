import fetch from 'isomorphic-fetch';
import StockPuppy from '../lib/StockPuppy.png'

const addDog = (dogs) => {
  return {
    type: "CREATE_DOG",
    payload: dogs
  };
};

const getDog = (dog) => {
  return {
    type: "ADD_DOG",
    payload: dog
  };
};

const mapDogs = (dogs) => {
  let dogList = dogs.petfinder.pets.pet

  const mappedList = dogList.map(dog => {
    let dogObj = {};
    let photo = dog.media.photos ? dog.media.photos.photo[3].$t : StockPuppy;

    dogObj.name = dog.name.$t;
    dogObj.age = dog.age.$t;
    dogObj.size = dog.size.$t;
    dogObj.sex = dog.sex.$t;
    dogObj.breed = dog.breeds.breed.$t;
    dogObj.contact_phone = dog.contact.phone.$t;
    dogObj.contact_email = dog.contact.email.$t;
    dogObj.contact_city = dog.contact.city.$t;
    dogObj.contact_state = dog.contact.state.$t;
    dogObj.photo = photo;
    // dogObj.user_id = userId;
    dogObj.description = dog.description.$t;

    return dogObj;
  })
  return mappedList;
}

const createDog = (dog) => {
  return fetch(`http://localhost:3001/dogs`, {
    method: "POST",
    headers: {
      "Accept":"application/json",
      "Content-Type":"application/json"
    },
    body: JSON.stringify(dog)
  })
  .then(response => response.json())
  .catch(error => console.log(error));
}

export const fetchDogs = (zip) => {
  return async dispatch => {
    return fetch(`${process.env.REACT_APP_EXTERNAL_API_URL}&location=${zip}&format=json&animal=dog&count=16`)
      .then(response => response.json())
      .then(function(dogs) {
        let mappedResponse = mapDogs(dogs);
        return mappedResponse
      })
      .then(async (mappedResponse) => {
        let doggies = await Promise.all(mappedResponse.map((dog) => {
          return createDog(dog);
        }))
        return doggies
      })
      .then(function(doggies) {
          dispatch(addDog(doggies))
        })
      .catch(error => window.alert("Not enough puppers - try a different zip code!"));
  };
};


export const fetchRandomDog = () => {
  return dispatch => {
    return fetch(`http://localhost:3001/dogs/1`)
      .then(response => response.json())
      .then(dog => dispatch(getDog(dog)))
      .catch(error => console.log(error));
  };
};