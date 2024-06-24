#!/usr/bin/env bash

apt-get update 
apt install git npm vim curl -y
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
apt install -y nodejs
