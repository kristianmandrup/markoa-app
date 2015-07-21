# Loader

## State loader

The `StateLoader` is used to define strategies for loading state to render in a template.

`loaders.js` - a sample loader config to load fixtures and config files.


## Views loader

`path-resolver.js` is utility class to help resolve view paths. It is used in `views-conf.js`.

This is because a view config uses only relative paths.

Each application (page) should create an independent view map, using its `views.rootPath` and calculate paths relative from there.

```js
  root: 'views',
  statics: {
    // used to build rootPath
    root: 'public'
  },
  pages: {
    root: 'pages',
    available: pagesList,
    active: ['index', 'casino']
  }
```