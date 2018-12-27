# Adopt-a-Pet

Gamified adoptable pet search interface with React/Redux frontend and Rails API backend. Initial pet search powered by [Petfinder API](https://www.petfinder.com/developers/api-docs). 

## Walkthrough

![Adopt-a-Pet Walkthrough](./public/walkthrough.gif)

See full walkthrough video [here](https://youtu.be/rumehkzhJaY).

## Usage

* To use this app, fork and clone this repo.
* From the root directory, run `bundle install` and start the rails server on port 3001 (`bundle exec rails s -p 3001`)
* The react components live in the client folder - cd into the client folder, and start the server on port 3000 (`npm install && npm start`)

The app will open at http://localhost:3000 in your browser. 

From the homepage, search for dogs or cats by zipcode. Click on an adoptable pet to see more details, but for every pet you choose one will go home with someone else! To see them again, hit "Play Again" or navigate to the homepage to search a different zip code or animal type. Head to the random pet page to see a random dog or cat from anywhere in the US!

(Must enable cross-origin resource sharing when running locally)

## Postgresql

Postgresql may need to be launched with `brew services start postgresql` For more information run `brew info postgres`.

**Start manually:**

`pg_ctl -D /usr/local/var/postgres start`

**Stop manually:**

`pg_ctl -D /usr/local/var/postgres stop`

**Start automatically:**

`brew services start postgresql`

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/AutumnJ/adopt-a-pet-game. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The app is available as open source under the terms of the [MIT License](https://github.com/AutumnJ/adopt-a-pet-game/blob/master/LICENSE.md).
