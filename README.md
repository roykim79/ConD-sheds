# Overview
## Name and aliases
The project is named "ConD_Sheds".

## Purpose
To exist as a Construction Designer Application template to make creating a new Construction Designer Application quicker and easier.


# How to set up the project
## External tool installation
```
git clone http://github.com/RoleModel/ConD_Sheds
cd ConD_New_App_Template
nodenv install
npm install
```

## How to run locally
`npm start`

## How to run tests
`npm test`

### Technologies
#### Chosen
* Nodejs
* Heroku
* React
* Mongoose + MongoDB - ORM (Object Rational Mapping) is based on the principal of having strict models or schemas. In ORM, which mongoose is using, you have to define your schema structure. There has to be a fixed schema.
   ODM (Object Document Mapping) is the core concept of mongo itself; and same goes with mongodb native driver. Mongodb doesn’t need any fixed schema. You can insert or update whatever and however you want.

This app was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Create-react-app uses react-scripts with Webpack (transpiling etc) and Jest (testing). Jest is very similar to Jasmine, and like create-react-app is published by Facebook.

You can find the most recent version of the create-react-app guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

We use npm 5+, which is why there is a package-lock.json in our root directory. To install and use a particular version:
```bash
npm install -g npm@latest
```

### Supported browsers
Chrome, Firefox. We do not actively support Safari or IE.

### Development environment setup

First, follow the instructions in the same section of the [README in the ConD core repository](https://github.com/RoleModel/construction-designer-core/blob/master/construction/README.md).

#### Optional: include locally-installed node commands in `$PATH`
Optionally, you can make all local node packages available as commands in your terminal. This means that whenever you run `npm install` in *any* software project on your machine, it will make the locally installed dependencies (e.g., `jasmine`) automatically available for use in the Terminal. This is useful because you no longer have to install anything on your machine globally. For example, this would enable you to run this software's lint script using `eslint` without having to install eslint globally. To get this feature, add the following to your PATH (in your .bash_profile):
```bash
$ export PATH=./node_modules/.bin:$PATH
```
Remember to restart your bash session after making changes to your bash_profile

### Install Application Dependencies
The current version of the template uses dependencies just like any other node app. The one unusual technique (but which is still a standard npm feature) is that the ConD-core package is private and fetched via GitHub, as detailed in [the README there](https://github.com/RoleModel/construction-designer-core/blob/master/construction/README.md).

### Keeping the indexes updated

Although this is an app and therefore no software should depend on this app as a package, it's still important for internal use to keep the module indexes in sync with the source. To this end, we recommend adding a pre-commit hook to git. To do that, say (from the repo root):

```bash
cp -i tools/pre-commit .git/hooks/
```
## How to run locally
```bash
$ npm run start
```

This will start in development mode or production mode based upon the `NODE_ENV` environment variable's value.

In development mode: a webpack dev server (provided by create-react-app) offers hot reloading of client code. An Express API server is also launched on a separate port. Requests for the API server are proxied through the web server.

In production mode: the Express server statically serves up all content from client/build, forwards all additional GET requests to the client, and directs POSTs to the server API logic.

The `MONGODB_URI` environment variable should contain the name of the MongoDB database (e.g., `mongodb://localhost/new_app_name`)
The default, set with construction-designer-core/drawing-editor-server/ProjectDatabase.js, is `mongodb://localhost/construction_designer`.

# How to run tests
## Manual Test Script
A [manual test script](doc/manual_test_plan.md) has been created to cover scenarios not covered by the command line tests. It should be executed prior to each production deployment.

## Command Line Tests
- To run all the tests, say `npm test`.
- To run only jasmine tests, which are in `client/src/shared/spec`, say `npm run test_jasmine`.
  - There is also a `single` variation that will run a single spec (with a little more detailed output), e.g.: `npm run test_jasmine_single client/src/shared/spec/models/SpacePlanningProjectEditorSpec.js`.
  - There is also a `debug` variation that will break upon any `debugger` statements it encounters in the specified spec, e.g.: `npm run test_jasmine_debug client/src/shared/spec/models/SpacePlanningProjectEditorSpec.js`.
- To run only jest tests, which tend to test React-based view component functionality, say `npm run test_jest`.
  - There is also a `debug` variation that will break upon any `debugger` statements it encounters in the specified spec, e.g.: `npm run test_jest_debug client/src/__tests__/views/common/TextAnnotationControlSpec.js`.
- To run jest tests whenever files change, say `npm run test_jest_watch`.

Ideally, all of the tests would use a single runner. (Jest is generally preferred because of its watching ability.) We consider this technical debt, and we'd like to address it at some point.

# Troubleshooting information
* [App Status Page](https://dashboard.heroku.com/apps) will give you information about what is running.
* To access a shell on the Heroku server, use the [Heroku Toolbelt](https://toolbelt.heroku.com/):
```bash
$ heroku run bash
Running bash on arch-programming... up, run.9938
```

* To view the server logs on Heroku use:
```bash
$ heroku logs
2017-02-13T20:52:43.468008+00:00 app[web.1]: Connected to mongodb://ds139879.mlab.com:39879/heroku_x37r75t9
2017-02-13T20:52:43.469326+00:00 app[web.1]: Fetching projects from mongodb://ds139879.mlab.com:39879/heroku_x37r75t9
2017-02-13T20:52:43.530327+00:00 app[web.1]: Found projects in DB: '{ _id: 58a1d68df36d2837a7c74f88, name: 'TestProject' }'
```

* To inspect the Mongo DB on localhost, use the `mongo` client:
```bash
$ mongo mongodb://localhost/construction_designer
MongoDB shell version: 3.2.9
connecting to: mongodb://localhost/construction_designer
```

In this case, the URL used, with the username and password, is available as an environment variable on the Heroku setup.

You can also view/edit the MongoDB used by the Heroku servers using the [Heroku Toolbelt](https://toolbelt.heroku.com/):
```bash
$ heroku addons:open mongolab
```
which will open a web browser to a page allowing access to the DB instance.

# Deployment

## ENV dependencies

- When we deploy, we build the static site and deploy that code. The static site is never pushed to GitHub.
- The standard 12-factor practice is to set ENVs on Heroku, and use those at runtime.
- As a static build, the client's only runtime is in the browser. That means the normal use of `process.env.SOMETHING` as set on Heroku (or whatever host) won't work.
- Luckily Webpack simulates this, and `react-scripts` supports ENVs with a `REACT_APP_` prefix in a `.env` file.
- Our package.json and `create_build.sh` script has a hackish solution to support different deployable environments.
- When we upgrade `react-scripts` this will work without the hacks and as you'd expect.

## Strategy/process/commands
The `master` branch is always deployable.

### Deploy via Semaphore
Both staging and production are deployed only through Semaphore.

In production mode, the web server serves us static content from client/build. Thus, client/build must be a part of the git repo and pushed to deployment server. However, it is undesirable to have these build artifacts permanently checked in (it creates another manual step for developers).

Therefore, our deployment script on Semaphore creates a commit for the build (locally, on Semaphore-only) and then pushes that to Heroku.

## ssh information
The [Heroku Toolbelt](https://toolbelt.heroku.com/) can be used to access the server and run one-off commands.

## Description of host(s), DNS, certificate authority
The application is deployed to Heroku. They are also hosting the DNS. The certificate was received from [Let's Encrypt](https://letsencrypt.org/).

# Copyright & licensing
Copyright (c) 2016 Closed Source @CompanyName
