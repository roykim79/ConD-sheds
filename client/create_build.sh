#!/usr/bin/env bash

set -e

PATH="./node_modules/.bin:$PATH"

cp ./webpack.config.prod.js node_modules/react-scripts/config/

NODE_ENV=production react-scripts build
