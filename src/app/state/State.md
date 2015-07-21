## State

The `/state` folder contains all the various types of stage made available to the app.

You can subclass and customize these State classes as you like in your own app to suit your needs.

### Data

`data.js` contains data and data provider functions.
The functions should wrap promises or generators that load data asynchronously. Data providers are typically used in `<async-fragments>` in the marko template.

- Store data (from data stores such as DBs)
- Page data
- Global data (`$global` key)
- Session data
- Content (CMS or feeds)

### Decorators

For maximum flexibility it is best to use a declarative (static) style of state definition. Then you can apply whichever Decorator
you like on this state to make it dynamic in nature. The server has some basic decorators built-in (see state/decorator).

To create a custom decorator:

 ```js
function cmsContentDecorator(loader, value) {
  return loader.retrieve(value);
}

...
var myStateDecorator = buildDecorator(loader, cmsContentDecorator);
```


