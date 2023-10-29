## Table of contents

- [Setup](#setup)
- [General info](#general-info)
    - [About](#about)
    - [API](#api)
    - [File structure](#file-structure)
    - [Routing](#routing)
- [Technologies](#technologies)
- [Stylings](#stylings)
- [Testing](#testing)
- [Live demo](#live-demo)

## Setup

To run this project, simply type the following commands in the terminal:

```
$ npm install
$ npm start
```

## General info

  #### About

  The app is intended to be a very lightweight encyclopedia of the Star Wars universe, featuring characters, planets and vehicles appearing in the series.

  #### API

  Application uses data provided by the Swapi API: https://swapi.info/api. 
  Although the API is great for providing data without the need of any authentication, it misses a lot of connections between characters, locations and vehicles (It doesn't mean that there are no connections at all!).
  It also appears that race for most human characters returns an invalid value, which is why it is set to 'unknown' by default.

  #### File structure

  Short preview of the applications file structure:

    public                  - contains images
    src
       |-- common           - contains common elements to be used, e.g. paths, types, utils, endpoint paths
       |-- components       - contains all components
       |-- hoc              - contains higher order components
       |-- hooks            - contains custom hooks
       |-- pages            - contains components used for routes and navigation
       |-- store            - contains redux related files
       |-- xhr              - contains axios instance for http requests
       |-- App.tsx          - main App component
       |-- main.tsx         - index of the App
       |-- index.scss       - contains stylings for body and #root
       |-- variables.scss   - contains scss variables to use throughout the app

  #### Routing

  Application deployed on GithubPages will have HashRouter implemented instead of BrowserRouter, which can lead to some unintended behaviours when navigating (especially when a page should redirect to 404 page, because a resource was not found). 
  Main branch will have original BrowserRouter solution implemented.

## Technologies

Project was created with:

- Vite                  version: 4.4.5
- React                 version: 18.2.0
- React Router Dom      version: 6.17.0
- React Redux           version: 8.1.3
- Reduxjs/toolkit       version: 1.9.7
- Typescript            version: 5.0.2
- Axios                 version: 1.5.1
- Sass                  version: 1.69.4
- Jest                  version: 29.7.0
- React testing library version: 14.0.0
- Eslint                version: 8.45.0
- Prettier              version: 3.0.3
- React spinners        version: 0.13.8
- NodeJS                version: 18.15.0

## Stylings

The styles were written using .scss files and following the BEM naming convention methodology. Each style file is located in its corresponding component location.

## Testing

To run tests, type the following command in the terminal: 

```
$ npm test
```

## Live demo

You can checkout the live demo of the application at: https://sebastian-mscisz.github.io/star-wars-demo/#/