# Overview
## Name and aliases
The project is named "ConD_New_App_Template".

## Purpose
To exist as a Construction Designer Application template to make creating a new Construction Designer Application quicker and easier.

## Technologies
### Chosen
* Nodejs
* Heroku
* React
* construction-designer-core

This app was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Create-react-app uses react-scripts with Webpack (transpiling etc) and Jest (testing). Jest is very similar to Jasmine, and like create-react-app is published by Facebook.

You can find the most recent version of the create-react-app guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

### Tried and rejected
* None yet

## Supported browsers
Chrome (for now).

# How to set up the project
## External tool installation
```
git clone http://github.com/RoleModel/ConD_New_App_Template
cd ConD_New_App_Template
nodenv install
npm install
```

## How to run locally
`npm start`

## How to run tests
`npm test`

## Troubleshooting information
There are no servers set up yet

# Testing Strategy
## Testing approach

### Unit tests
Due to the nature of this application, unit tests are prominent and handle most of the confidence building and documentation needs of the system below the user interface.

### Other tests
At this point, no other tests are being employed.
However, one might consider performance tests or other categories and describe the reasons here

## Testing tools
* jasmine
* jest

## Continuous integration
No CI has been set up yet (though we recommend Sempahore in most cases).  When you set it up, tell what you need to know here

# Branching strategy
To begin a new feature run, `git checkout -b <branchname>`.
When finished with the feature and the code has been reviewed, the commits should be squashed before merging. See [RoleModel Best Practices](https://github.com/RoleModel/BestPractices) for more information.

# List of background processes
* None yet

# Links to:
* [Git repo](http://github.com/RoleModel/ConD_New_App_Template)

## External services
* [Heroku](http://herokuapp.com)

## [CI](https://semaphoreci.com/rolemodel/ConD_New_App_Template)
## [List of contributors](https://github.com/RoleModel/ConD_New_App_Template/graphs/contributors)

# Deployment
## Strategy/process/commands
`master` is always deployed to production.

```
git checkout master
git tag 2016-05-16 # <date> YYYY-MM-DD
git push --tags
```

## Description of host(s), DNS, certificate authority
The application is deployed to Heroku. They are also hosting the DNS. We certificate was received from [Let's Encrypt](https://letsencrypt.org/).

## ssh information
`ssh user@hostname.com`

# Customer contacts
* None yet

# Copyright & licensing
Copyright (c) 2016 Closed Source @CompanyName
