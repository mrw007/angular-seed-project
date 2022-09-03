<h1>🌱 Angular seed project</h1>

![Travis (.com) branch](https://img.shields.io/travis/com/mrw007/angular-seed-project/main)
![Codecov branch](https://img.shields.io/codecov/c/github/mrw007/angular-seed-project/main)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

by [@Mr_w_007](https://twitter.com/Mr_w_007).

This is an Angular project seed based on [Angular](https://angular.io/) 12 (Updated to Angular 14).

## Table of Content

- [Features](#🌟-features)
- [Prerequisites](#⚡-prerequisites)
- [Installation](#🚧-installation)
- [Getting Started](#🚀-getting-started)
- [Starting the development server](#🏃‍♂️-starting-the-development-server)
- [Building the Project](#🔨-building-the-project)
- [Testing](#🧪-testing)
- [Code scaffolding](#🏗-code-scaffolding)
- [NgRx](#🔄-ngrx)
- [Documentation](#📖-documentation)
- [Further help](#🆘-further-help)

## 🌟 Features

- Dockerized project.
- [NgRx](https://ngrx.io/) Architecture.
- Angular [Material](https://material.angular.io/).
- [Bootstrap](https://getbootstrap.com/) CSS.
- [Fontawsome](https://fontawesome.com/) Icons.
- Dynamic theming.
- Documentation generation using [Compodoc](https://compodoc.app/).

## ⚡ Prerequisites

The project is intended to be developed in a docker environment, so it is recommended to install version 20 or higher [Docker](https://www.docker.com/community-edition) version.

The dockerized project have dependencies that require Node 14, NPM 6 or higher [NodeJS](https://nodejs.org/en/) version.

## 🚧 Installation

**Before you install:** Please read the [prerequisites](#prerequisites)

**Clone the project to working directory**

```bash
git clone https://github.com/mrw007/angular-seed-project.git
cd angular-seed-project
```

## 🚀 Getting Started

### **Creating the development environment**

```bash
sh entrypoint create-env-dev
```

### **Getting into the docker container**

To access the running container

- **If you are using Windows**

```bash
sh entrypoint start
```

- **If you are using Linux**

```bash
sh entrypoint start-linux
```

## 🏃‍♂️ Starting the development server

The development server is mapped automatically via the docker container networking publishing the server app by default on [localhost:8080](http://localhost:8080).

The app will automatically reload if you change any of the source files.
Just run

```bash
npm start
```

inside the running container.

## 🔨 Building the Project

Run

```bash
npm run build
```

to build the project loacally. The build artifacts will be stored in the `dist/` directory.

## 🧪 Testing

### **Running unit tests**

Tests will execute after a build is executed via [Karma](https://karma-runner.github.io), and it will automatically watch your files for changes

```bash
ng test
```

Following the test result is ensured in the generated reports file.

### **Running end-to-end tests**

Run

```bash
ng e2e
```

to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## 🏗 Code scaffolding

You can use the `ng generate` (or just `ng g`) command to generate Angular components:
You can find all possible blueprints in the table below:

| Scaffold | Usage |
| | |
| [Component](https://github.com/angular/angular-cli/wiki/generate-component) | `ng g component my-new-component` |
| [Directive](https://github.com/angular/angular-cli/wiki/generate-directive) | `ng g directive my-new-directive` |
| [Pipe](https://github.com/angular/angular-cli/wiki/generate-pipe) | `ng g pipe my-new-pipe` |
| [Service](https://github.com/angular/angular-cli/wiki/generate-service) | `ng g service my-new-service` |
| [Class](https://github.com/angular/angular-cli/wiki/generate-class) | `ng g class my-new-class` |
| [Guard](https://github.com/angular/angular-cli/wiki/generate-guard) | `ng g guard my-new-guard` |
| [Interface](https://github.com/angular/angular-cli/wiki/generate-interface) | `ng g interface my-new-interface` |
| [Enum](https://github.com/angular/angular-cli/wiki/generate-enum) | `ng g enum my-new-enum` |
| [Module](https://github.com/angular/angular-cli/wiki/generate-module) | `ng g module my-module` |

angular-cli will add reference to `components`, `directives` and `pipes` automatically in the `app.module.ts`. If you need to add this references to another custom module, follow this steps:

1. `ng g module new-module` to create a new module
2. call `ng g component new-module/new-component`
   This should add the new `component`, `directive` or `pipe` reference to the `new-module` you've created.

## 🔄 NgRx

### **What is NgRx?** 🤔

NgRx is a framework for building reactive applications in Angular. NgRx provides libraries for:

- Managing global and local state.
- Isolation of side effects to promote a cleaner component architecture.
- Entity collection management.
- Integration with the Angular Router.
- Developer tooling that enhances developer experience when building many different types of applications.

### **Installed Packages** 📦

- `@ngrx/store` - including reducers, actions, selectors
- `@ngrx/effects` - for implementation of side effects like http requests, logging, notifications,...
- `@ngrx/entity` - for CRUD operations
- `@ngrx/router-store` - to connect the Angular Router to @ngrx/store
- `@ngrx/store-devtools` - to enable a powerful time-travelling debugger.

### **Further help** 📚

To get more help about Ngrx, check out [NgRx's official documentation](https://ngrx.io/) website.

## 📖 Documentation

You can generate the Project's documentation with [compodoc](https://compodoc.app/) using the following command, inside the running container

```bash
npm run compodoc
```

## 🆘 Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
