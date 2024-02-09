#!/bin/bash
echo "Configuring frontend"
if [ "$ENVIRONMENT" = "production" ]; then
    echo "Starting in production mode..."
    npm run start
else
    echo "Starting in development mode..."
    npm run dev:watch
fi