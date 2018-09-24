# Collaborative Online Judge System

## Overview

- Implemented a web-based collaborative code editor which supports multiple user editing simultaneously
- Developed a web application with Angular2 for frontend, Auth0 for authentication, NodeJS for backend and MongoDB for database
- Used the socket.io as the communication protocol to handle the heavy client-server communication and used ACE, as client-side source code editor
- Built a user-code executor service in flask and execute user’s code in Docker container

[![image1](https://camo.githubusercontent.com/59a529b62f138df16d8919f3d8e581d11ffd90db/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6f6e6c696e656a756467653131322f696d6167652f73342e706e67)](https://camo.githubusercontent.com/59a529b62f138df16d8919f3d8e581d11ffd90db/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6f6e6c696e656a756467653131322f696d6167652f73342e706e67)

\#Showcase Home page [![image1](https://camo.githubusercontent.com/84ec73609a994d441cb045fd9cfdf3d96c57019a/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6f6e6c696e656a756467653131322f696d6167652f73312e706e67)](https://camo.githubusercontent.com/84ec73609a994d441cb045fd9cfdf3d96c57019a/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6f6e6c696e656a756467653131322f696d6167652f73312e706e67)After authentication [![image1](https://camo.githubusercontent.com/684ac6c338bb3c3e63d122423f12b3326a1c1cc9/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6f6e6c696e656a756467653131322f696d6167652f73322e706e67)](https://camo.githubusercontent.com/684ac6c338bb3c3e63d122423f12b3326a1c1cc9/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6f6e6c696e656a756467653131322f696d6167652f73322e706e67)Edit page [![image1](https://camo.githubusercontent.com/d0fc15fdebff15f8cc0a4f1e1ff46cb789353d4d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6f6e6c696e656a756467653131322f696d6167652f73332e706e67)](https://camo.githubusercontent.com/d0fc15fdebff15f8cc0a4f1e1ff46cb789353d4d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6f6e6c696e656a756467653131322f696d6167652f73332e706e67)

## How to run

### Installation

1. Install NodeJs:

```
sudo apt-get update
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt-get install -y nodejs
```

1. Install Nodemon

```
npm install -g nodemon
```

1. Install git

```
sudo apt-get install git
```

1. Install angular/cli

```
    npm install -g @angular/cli
```

1. Install Redis

```
    wget http://download.redis.io/releases/redis-3.2.6.tar.gz
    tar xzf redis-3.2.6.tar.gz
    cd redis-3.2.6
    make
    sudo make install
    cd utils
    sudo ./install_server.sh
```

1. Install python 2.7
   This is installed already in Ubuntu
2. Install pip

```
    (sudo apt-get update)
    sudo apt install python-pip
    sudo pip install Flask
```

1. Install Docker:

```
    curl -fsSL https://get.docker.com/ | sh
```

1. Setup docker permission:

```
   sudo usermod -aG docker $(whoami)
   # need to logout and login again after set permission
   To start docker when the system boots: sudo systemctl enable docker
```

1. Install Nginx
   For ubuntu 16.04) Add following two lines into /etc/apt/sources.list

```
   deb http://nginx.org/packages/ubuntu/ xenial nginx 
   deb-src http://nginx.org/packages/ubuntu/ xenial nginx 
```

Then run:

```
   sudo apt-get update 
   sudo apt-get install nginx
```

### Execute

1. make sure replace the mongoDB connection url and google API key for Auth0

run:
