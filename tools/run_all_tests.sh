#!/usr/bin/env bash

# Run all the tests and exit with a non-zero status code if at least one fails
EXIT_STATUS=0
npm run test_jasmine || EXIT_STATUS=$?
CI=true npm run test_jest || EXIT_STATUS=$?
exit $EXIT_STATUS
