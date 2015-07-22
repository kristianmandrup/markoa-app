## Advanced mounting

## Batched Views mounting

Mounting views for multiple apps should allow resue of the same viewsTemplate and resolver.

```js
viewsTemplate = {
  views: {
    root: 'views',
    assets: {
      // used to build rootPath
      root: 'my-assets'
    },
    pages: {
      root: 'my-pages',
    }
  }
};

// takes an appName, app rootPath and a viewsTemplate
// returns a resolved viewsTemplate
function viewsResolverFn(appName, appRootPath, viewsTemplate) {
  // do some magic!
  return resolvedViewsTemplate;
}
```

Mounting is then done by passing a `viewsConf` object

```js
let viewsConf = {
  template: viewsTemplate
  resolver: viewsResolverFn
}
```

Can be done either for a single app or in batch mode by iteration ;)

```js
server.mountAppViews(viewsConf, ['index', 'casino', prematch]);
server.mountAppView(viewsConf, 'index');
```

## App State mounting

```js
function stateResolver(data, [decorator]) {
  return resolvedData;
}
```

```js
mountAppState(data, appName, [stateResolver]) {
  var resolvedData = stateResolver(data); // optional
  this.app(name).state.merge(resolvedData);
}
```

## Batched State mounting

```js
mountAppStates(data, appNames) {
  for (let name in appNames) {
    this.mountAppState(data, name);
  }
}
```
