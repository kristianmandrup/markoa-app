## Views loader

The *Views loader* must use the `pages` Object to create routes to the pages of the mounted app. The route generator is responsible for handling the "pattern" of the routes.

Sample routes from example:

- `/casino`
- `/casino/mobile`

Every app should mount with its root path.

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

View Artifacts used to display the page to the browser:
- asset
- template
- layout template
- partial template
- custom tag

Any View Artifact must be placed under the `/views` folder of the application. This makes it easy to port them as a single unit.
Also important to have conventions in place for developer workflow.

The `assets.rootPath` and `pages.rootPath` must both be resolved relative to `views.rootPath`.

Note that if `root` is not specified, the following defaults are assumed:
- views: `views`
  - assets: `assets`
  - pages: `pages`

If you follow this structure in your app (via app generator!) you are all set :)