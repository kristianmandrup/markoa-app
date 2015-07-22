# Views Resolver

```js
mounted.apps.casino = {
  rootPath: '/path/to/casino-app'
}
```

Resolved app views:

```js
{
  views: {
    root: 'views',
    rootPath: '/path/to/casino-app/views'
    assets: {
      // used to build rootPath
      root: 'my-assets'
      rootPath: '/path/to/casino-app/views/my-assets'
    },
    pages: {
      root: 'my-pages',
      rootPath: '/path/to/casino-app/views/my-pages'
    }
  }
};
```