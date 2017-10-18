# RBAC: Role-Based Access Control

> A demonstration of Role Based Access Control

## Introduction

*RBAC* is an approach to inspect and restrict access to system implemented 
as organizing individuals with an abstract layer (i.e. manage *users* 
indirectly via *roles*). A minimal design confronting this approach may 
involve 3 entities (`user`, `role`, `permission`)
 and 2 many-to-many connections (`user` to `role`, `role` to `permission`).
To focus on the cor concepts of *RBAC*, this demonstration illustrates 
this model with a set of minimal virtual tables covering the entities and
connections listed above. (shows as the following E-R diagram)

![min](https://cdn.rawgit.com/Jack-Q/rbac/82ba3a587bf486686164506084e9b2a839436ae3/doc/er.svg)

## Preview

* visit [git.io/rbac](https://git.io/rbac)

![ok](doc/demo_ok.png)

![ok](doc/demo_fail.png)

## Features

* *CABR* is a demo system which permission is managed by the rest of the whole project.
  The buttons in *CABR* are abstractions of resources in real-world application, and one or 
  several operations in a predefined set can be applied to the resources via 
  the resource &amp; permission control panel (*CABR* supports *click*, *right click* and *double click* ).
  By default, the *CABR* has no user logged in (a.k.a. the guest mode), which will transit
  to logged-in mode by click *log in CABR* button is user control panel.

* Local storage based *database* for maintaining user, role, resource and the relationships in between.
  A inspector of the virtual database is available for checking its status.

## Build Setup

This building and packaging system for this project is WebPack, which can be easily configured 
in an environment with node.js and npm. The following commands can be used as an start point for 
further development.

``` bash
# fork and clone this repository, then change working directory 
# in command line interface to root directory of this repository

# install dependencies (including both runtime and development dependencies)
npm install

# serve with hot reload at localhost:8080
# a window of the default browser will open and direct to the application
npm run dev

# build for production with minification
npm run build

```
## License

This project is released under the terms of [MIT](./LICENSE) open source licence.