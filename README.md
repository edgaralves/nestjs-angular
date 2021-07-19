# Webapp

Project Blueprint with Angular and NestJS

## Install application

run `npm install`
run `npm run bootstrap`

## Run application

run `npm run start`

## Stop application

run `npm run stop`

## Install in Windows

- Follow instructions to install "Docker for Windows" with WSL2 (Ubuntu) (https://docs.docker.com/docker-for-windows/install/)
- Add your everis user to docker-users (Windows>Computer Management>Local Users And Groups>Groups>docker-users)
- Install extensions for Visual Studio Code: "Remote - WSL" and "Remote - Containers"
- Install Ubuntu through Windows Store

******
In case you do not have the windows store in your PC:
- Download and install the most recent version of ubuntu in https://docs.microsoft.com/en-us/windows/wsl/install-manual
- Run in powershell `wsl --set-version Ubuntu-20.04 2`
- Run in powershell `wsl --set-default-version 2`
- Open Docker Desktop > Settings > Resources > WSL Integration and enable Ubuntu-20.04
******

- Run Ubuntu through "Remote - WSL" (should say WSL:Ubuntu-{version} in the bottom left corner in vscode)
- Install nodejs through terminal in the remote window `curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -` and `sudo apt install nodejs`, check install status with `node --version` and `npm --version`
- Run `npm install`
- Run `npm run bootstrap`
