# Webapp

Project Blueprint with Angular and NestJS

## Install application

run `npm run bootstrap`

## Run application

run `npm run start`

## Install in Windows

- Follow instructions to install "Docker for Windows" with WSL2 (Ubuntu) (https://docs.docker.com/docker-for-windows/install/)
- Install extensions for Visual Studio Code: "Remote - WSL" and "Remote - Containers"
- Run Ubuntu through "Remote - WSL" (should say WSL:Ubuntu-{version} in the bottom left corner in vscode)
- Install nodejs through terminal in the remote window `curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -` and `sudo apt install nodejs`, check install status with `node --version` and `npm --version`
- Run `npm run bootstrap`
