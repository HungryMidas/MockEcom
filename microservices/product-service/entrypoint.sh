#!/bin/bash
echo "Configuring product-service"
if [ "$ENVIRONMENT" = "production" ]; then
    echo "Starting in production mode..."
    npm run start
else
    echo "Starting in development mode..."
    npm run start:devlint
fi