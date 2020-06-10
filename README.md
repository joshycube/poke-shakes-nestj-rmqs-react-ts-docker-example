# Pokemon Shakespear API

This is a demonstration of a NodeJS based micro service and REST API architecture consumed by a React application.
Dockerized and tested by Cypress.

## How to run this project to try it out?

### Prerequisites

- docker
- docker-compose

### Steps

- `sh demo.sh`
- open `http://localhost:8080` in your browser
- type in Celebi for instance and hit enter

## How to develop this project further?

### Prerequisites

- docker
- docker-compose
- node 13
- npm or yarn

### Steps

- `sh dev.sh`
- cd in to client and run `yarn`
- cd in to client/packages/shared and run `yarn`
- cd in to client/packages/app and run `yarn` then `yarn start`
- cd in to api/packages/search and run `yarn` then `yarn start:dev`
- cd in to api/packages/translate and run `yarn` then `yarn start:dev`
- open `http://localhost:3000` in your browser
- type in Pikachu for instance and hit enter
- open `http://localhost:5000/pokemon/celebi` to see what the API returns

## How to run tests on this project?

### Prerequisites

- docker
- docker-compose
- node 13
- npm or yarn
- cypress

### Steps

- `sh demo.sh`
- cd in to client
- run `yarn`
- run `yarn run cypress:open`
- pick a test and run it
