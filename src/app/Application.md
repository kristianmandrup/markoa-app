# Application

An Application is mounted on the Server as follows:

`server.mount(new Application({..}), 'default');`

Each application is mounted with a `name` for that page. Each page is considered a Single Page App (SPA).
The Koa server will generate routes for each mounted app.

## Default app

When the Server is initialized it creates a `default` app which is can be used as a fallback.
The `default` app is configured to use the default views and state of the server.
We don't recommend using the default app except for testing purposes.

The default application is created `Application.createDefault(config)` where config is the server configuration `server.config`.

```js
class Application {
  static createDefault(config) {
    return new Application({
      state: new State(config),
      views: new Views(config)
    });
  }
}
```

## App structure

An application can define following properties:
- views
- state

The mounted apps will be available as `server.mounted.apps`.
Essentially:

`server.mounted.apps.index = new Application({});`

Note that if a named application such as `index` doesn't define a `Views` instance, the mounted app will fallback to using the views from the `default` app. Same goes for `state`.

## Application Loader

You can define a custom `Loader` for the app to load its state (models) and views.

```js
import Loader from 'markoa/application/loader';

var myAppLoader = Loader.createFrom(config, {
  rootPath: __dirname,
  state: {
    rootPath: '.',
    fixtures: 'my/fixtures'
  },
  views: {
    rootPath: 'views',
    pages: 'pages'
  }
});
```

Note: The loader will use some default server settings if either of these keys are missing.

You can also do this directly via the `ViewsLoader` and `StateLoader` as follows:

```js
var viewsLoader = new ViewsLoader({});
server.app('index').loader.views = viewsLoader;
```

## Application State

```
import State from 'markoa/state';

var myState = new State({
  loader: myAppLoader,
  stores: myStores,
  ...
}).init();
```

## Application Views

import Views from 'markoa/views';

```js
var myState = new Views({
  loader: myAppLoader,
  ...
}).init();
```

## Application Mounting

server.mount(new Application({
  state: myState
}, 'index');
```

It should be easy to later mount Views or remount a different app State

```js
var indexApp = server.app('index');
indexApp.mount({
  state: otherState
});
```

or more directly

```
indexApp.mountViews(new Views());
indexApp.mountState(new State());
```







