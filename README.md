# puppeteer
Puppeteer docker container base for automation scripts

## Usage

* Create a directory with two files for creating a new container extending this base container

  * Dockerfile
```
FROM flaviostutz/puppeteer
ADD /main.js /app/main.js
```

  * docker-compose.yml
```yml
version: '3.7'

services:

  puppeteer:
    build: .
    cap_add:
      - SYS_ADMIN
```

* Run "docker-compose up --build"

* See example at [/example](/example)

