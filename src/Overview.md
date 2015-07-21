## Koa server Overview

### Techs used

- [Marko](https://github.com/raptorjs/marko) for async templating
- [Lasso.js](https://github.com/lasso-js/lasso) for page bundling

### File structure

- `app` : for building an application
- `server` : for setting up the server
- `utils` : general purpose utils

### Application

See [Application docs](https://github.com/kristianmandrup/fresh-markoa-es6-node/tree/master/src/app/Application.md)

### Server

See [Server docs](https://github.com/kristianmandrup/fresh-markoa-es6-node/tree/master/src/server/Server.md)

### Utils

See [Utils docs](https://github.com/kristianmandrup/fresh-markoa-es6-node/tree/master/src/utils/Utils.md)

### Defaults

In the root of this project you will find a `default` folder. This can be used to pass in a defaults configuration object to be used by the application loader to load default state and views directly from the this server project if needed.

