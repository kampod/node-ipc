#!/bin/bash

if [ -z ${npm_package_name+x} ]; then
  echo "$0 must be run from NPM"
  exit 1
fi

docker-compose --file debug/docker-compose.yaml down
