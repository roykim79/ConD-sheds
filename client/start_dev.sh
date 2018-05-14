#!/usr/bin/env bash

PATH="./node_modules/.bin:$PATH"

cp ./webpack.config.dev.js node_modules/react-scripts/config/
react-scripts start
