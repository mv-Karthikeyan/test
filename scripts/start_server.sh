#!/bin/bash
# Stop any running instances of the application
pkill -f dotnet

# Start the application
cd /var/www/myapp
nohup dotnet myapp.dll > /dev/null 2>&1 &
