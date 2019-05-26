# Apollo Server Boilerplate

## dir structure

```
/
  .env <-- create this file (see below)
  .gitignore
  package.json <-- eslint / nodemon config, customize with your info
  package-lock.json
  src/
    index.js <-- API entrypoint (only customize context as needed)
    db/
      index.js <-- exports all db related bits
      models/ <-- define models in here
        index.js <-- exports models
    api/
      resolvers/
        index.js <-- bundles and exports all resolvers, dont modify
        mutations.js <-- define root mutation resolvers
        queries.js <-- define root query resolvers
        scalars.js <-- use @okgrow/graphql-scalar or define scalar resolvers
        types.js <-- define type resolvers
      type-defs/
        index.js <-- bundles and exports all type defs, dont modify
        index.graphql <-- bundles and exports all SDL type defs, dont modify
        mutations.graphql <-- define mutations
        queries.graphql <-- define queries
        scalars.graphql <-- define additional scalars
        enums.graphql <-- define enums
        inputs.graphql <-- define inputs
        types.graphql <-- define types
```

## includes

- `eslint` for linting with the AirBnB and Prettier rules
  - tip: add the `eslint` and `prettier` extensions in vscode to make use of these during development
- `jest` for testing
  - eslint jest config for linting test best practices
  - type defs for autocomplete in test files
- `graphql-import` for writing type defs in `.graphql` SDL files
- `nodemon` for local development (auto restarts on change)
  - includes custom config so it watches your `.graphql` SDL files for changes as well
- GraphQL scalars from [@okgrow/graphql-scalars](https://www.npmjs.com/package/@okgrow/graphql-scalars)
  - boilerplate includes EmailAddress, URL, and DateTime scalars
  - add additional scalar defs to the `src/api/type-defs/scalars.graphql` file
  - add additional scalar resolvers to the `src/api/resolvers/scalars.js` file (the same way the boilerplate ones are used)
- pre-configured winston logger from [@vampiire/node-logger](https://www.npmjs.com/package/@vampiire/node-logger)
  - colorized console logging during development
  - writes rotating log files during production

## setup

- clone the boilerplate repo

```sh
git clone https://github.com/the-vampiire/apollo-server-boilerplate
```

- create a new repo on your account and leave it empty
  - **do not initialize with a readme, license, gitignore etc**
- copy your new repo URL
- navigate to the cloned boilerplate repo in your terminal
- replace the git remote with your own

```sh
git remote remove origin
```

```sh
git remote add origin <your new repo url>
```

- update `package.json` with your own information
  - `name, author, description, license, repository, bugs, homepage`
- create your `.env` file in the root directory

```sh
PORT=8008
ERROR_LOGS_DIR=logs/errors
COMBINED_LOGS_DIR=logs/combined
```

- `PORT`: the port the API will listen on (set it to anything you'd like)
- `ERROR_LOGS_DIR`: where error log files should be written
- `COMBINED_LOGS_DIR`: where combined log files should be written
  - you dont have to set either of these locally
  - they must be supplied if you deploy the project and set `NODE_ENV=production`

## running

- start production with `npm start` (dont forget your env vars)
- run tests with `npm test` (runs linter and jest tests)
- start dev mode with `npm run dev` (loads `.env` then watches and reloads on change)

## customize

- add your type defs in `src/api/type-defs`
  - you don't need to modify `src/api/type-defs/` `index.js` or `index.graphql` they are already set up to bundle and export your schema
- add your resolvers in `src/api/resolvers`
  - you don't need to modify `src/api/resolvers/index.js` it is already set up to bundle and export your resolvers
- add and export your database models in `src/db/models`
- customize the API `context` in `src/index.js` but do not modify anything else (it is all wired up)
- override eslint rules in `package.json` `eslintConfig.rules` section
- customize the logger see options at [@vampiire/node-logger](https://www.npmjs.com/package/@vampiire/node-logger)
