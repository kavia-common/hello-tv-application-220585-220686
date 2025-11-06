#!/bin/bash
cd /home/kavia/workspace/code-generation/hello-tv-application-220585-220686/frontend_tizen
npx eslint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
 if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi

