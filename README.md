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

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build (ng)

Run `ng build` to build the project in __development__. To build homolog run `npm run buildhomolog` and for __production__ run `npm run buildprod`.

## Build (docker)

Run `docker build -t ui:0.0.1 .`. __Remember to update it version!__

## Running (docker)

 Run `docker run -d -p 3500:80 --name ui -it imageID`. IF stuck __or to kill the containr__ use this command to remove container: `docker rm -f containerID`. To access the Docker as BASH: ``$ docker exec -it container sh``

## Docker publish

1. Com a imagem ja criada digite o seguinte código no terminal
`docker tag nome_da_imagem id_docker_hub/nome_da_imagem_hub:tag_version`

2. Insira o seguinte código para dar um push para o DockeHub e aguarde
`docker push id_docker_hub/nome_da_imagem_hub:tag_version`

## Python for Eureka

1. Install python3
2. Install venv ``$ pip3 install virtualenv``
3. Create venv at registry folder: ``$ cd registry && python3 -m virtualenv venv``
4. Install python dependencies: ``$ pip install -r requirements.txt``

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
