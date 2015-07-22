## Koa server Overview

### Techs used

- [Marko](https://github.com/raptorjs/marko) for async templating
- [Lasso.js](https://github.com/lasso-js/lasso) for page bundling

### File structure

- `/loader` : helpers for loading app: state and views
- `/state` : for configuring app state
- `mounter.js` : for mounting and unmounting apps
- `loader.js` : for loading state and views of the app
- `configurator.js` : base class - to manage general config object

### Application

### State

Loads and configures application State.

### Views

[Sample views config](https://github.com/kristianmandrup/offside-defaults/blob/master/src/views/index.js)

```js
{
  pages: {
    active: ['casino', 'mobile'],
    main: 'casino'
    sub: [
      {mobile: 'mobile/casino'}
    ]
  },
  views: {
    root: 'views',
    assets: {
      // used to build rootPath
      root: 'public'
    },
    pages: {
      root: 'my-pages',
    }
  }
};
```

Note: You only need to specify a Views config if you *break* the default conventions.

See [Views](https://github.com/kristianmandrup/markoa-app/tree/master/src/app/Views.md)

### Views Loader

See [Views-Loader](https://github.com/kristianmandrup/markoa-app/tree/master/src/app/loader/Views-Loader.md)

### Defaults

In the root of this project you will find a `default` folder. This can be used to pass in a defaults configuration object to be used by the application loader to load default state and views directly from the this server project if needed.

