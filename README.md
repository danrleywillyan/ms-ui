# DafAppTeste

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

## Env Installation

Run commands to clear AngularCLI:
```shell
npm uninstall -g angular-cli @angular/cli
npm cache clean
npm install -g @angular/cli
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding - Page

Run `ng generate component pages/module_name/component_name --module=layouts/app-layout/app-layout.module` to generate a new component as page. As example: `ng generate component pages/budget/dashboard --module=layouts/app-layout/app-layout.module`. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Code scaffolding - Service

Run `ng generate service services/module_name/service_name` to generate a new service as http client. As example: `ng generate service services/elucidation/occurrences_types`.

## Build (ng)

Run `ng build` to build the project in __development__. To build homolog run `npm run buildhomolog` and for __production__ run `npm run buildprod`.

## Clean (docker)

Stop all services & remove all images: ```$ docker stop $(docker ps -aq) && docker rm $(docker ps -qa) &&  docker rmi -f $(docker images -qa)```

## Running/Debug (docker)

 Run `docker run -d -p 3500:80 --name ui -it imageID`. IF stuck __or to kill the containr__ use this command to remove container: `docker rm -f containerID`. To access the Docker as BASH: ``$ docker exec -it container sh``

## Build (docker)

Run `docker build -t ui:remote .`. __Remember to update it version!__

## Docker publish

1. Com a imagem ja criada digite o seguinte código no terminal
`docker tag ui:remote msdaf/ui:remote`

2. Insira o seguinte código para dar um push para o DockeHub e aguarde
`docker push msdaf/ui:remote`

## Python for Eureka

1. Install python3
2. Install venv ``$ pip3 install virtualenv``
3. Create venv at registry folder: ``$ cd registry && python3 -m virtualenv venv``
4. Install python dependencies: ``$ pip install -r requirements.txt``

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Running backend server (Flask)

```$ flask run --host=0.0.0.0```

```$ FLASK_ENV=development flask run -h 0.0.0.0```
