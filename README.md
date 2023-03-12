### Government User Express Application

This is a working NodeJS (express) web application that uses express with nunjunks and the [GOV.UK frontend](https://github.com/alphagov/govuk-frontend)

It also acts as the standard for how an express project should be structured, and what files are expected.

It can be copied and used at the starting point for any new web app.

### Project structure

NodeJS services follow the express [routes/controllers](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes)
pattern, along with with [service classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) that CRUD data.

    src
    +-- bin
    |   -- www.js
    |   controllers    
    |   routes    
    |   views
    |   services
    |   scss
    test
    --- web
    --- services
    --- ...

### Prerequisites and setup

Developers should install the following on their machines:

* [NodeJS](https://nodejs.org/en/download)

Optional

* [NVM](https://github.com/nvm-sh/nvm)

Environment variables are defined in the `.env` file.

### View templating

This project uses [nunjucks](https://mozilla.github.io/nunjucks/) for its view templating.

### Commands

##### Development

Install the dependencies

    npm install

Test (first start `user-api` service)

    npm test

Run locally

    npm start

### Accessing locally

The service will be available at http://localhost:3000/
