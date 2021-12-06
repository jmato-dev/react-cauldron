# React Cauldron

A boilerplate for ReactJS web apps with initial configs for Webpack, Jest, ESLint & Prettier.

## What's in the cauldron?

- React 17
- Webpack 5 (with webpack-dev-server)
- Babel 7
- Jest 27 (with testing-library)
- ESLint 8 (airbnb + jest)
- Prettier 2

## Use

In the project directory type:

`yarn && yarn start`

## Commands

| Alias      | Description                              | Command                               |
| ---------- | ---------------------------------------- | ------------------------------------- |
| build      | make a production build                  | webpack --mode production             |
| devel      | make a development build                 | webpack --mode development            |
| lint       | lint files on project                    | eslint .                              |
| lint:fix   | fix all auto-fixable linting problems    | eslint --fix .                        |
| start      | start development server                 | webpack-dev-server --mode development |
| test       | run all tests on project                 | jest                                  |
| test:watch | watch tests on project and show coverage | jest --watchAll --coverage            |
