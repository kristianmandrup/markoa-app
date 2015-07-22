# Resolver

## Views Resolver

Every app should mount with its root path.

```js
mounted.apps.casino = {
  rootPath: '/path/to/casino-app'
}
```

Given a View config:

```js
{
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

The Resolved app views should be:

```js
{
  views: {
    root: 'views',
    rootPath: '/path/to/casino-app/views'
    assets: {
      // used to build rootPath
      root: 'public'
      rootPath: '/path/to/casino-app/views/public'
    },
    pages: {
      root: 'my-pages',
      rootPath: '/path/to/casino-app/views/my-pages'
    }
  }
};
```