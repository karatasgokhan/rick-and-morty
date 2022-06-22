# Rick And Morty App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

An application was developed using **https://rickandmortyapi.com/** to list Rick and Morty characters with ReactJs.

Locations, dimension, type and resident count information are listed on the locations page by requesting the **https://rickandmortyapi.com/api/location?page=${page Number}** api.

When you click on a location in the table, the id's of the clicked location are retrieved and a request is sent to the
**https://rickandmortyapi.com/api/location/${locationId}** API. From the returned response, the identities of the residents are taken and by sending a request to the \*\* **https://rickandmortyapi.com/api/character/${characterId}** API, their names, properties, status, types and lineage name information are obtained and list.

## Available Scripts

In the project directory, you can run:

### `yarn install`

Downloads required packages locally

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
