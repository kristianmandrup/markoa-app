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

### State injectors

Before the State is passed to the template, there should be a chance for the app/server to modify, transform or inject certain state given the current context. For this purpose we introduce a `StateInjector`.

```js
class StateInjector extends Configurator {
  constructor(config) {
    super(config)
  }

  inject(context, state, next {
    next(newState);
  }
}
```

State Injectors are registered as a pipeline, similar to how Middleware is registered with a Koa app.
Each state Injector is then called in succession with the state returned by the previous injector for further modification.

Injectors can be used to insert user session data, locale, language (from browser header?), URL params etc.

State injectors can be registered per application or per site. For each page, first the site injectors pipeline is called and then the app injector pipeline.

Register an App State injector:

`app.state.addInjector(myStateInjector);`

Register a Site State injector:

`server.configuration.addInjector(myStateInjector);`

#### Injector Context

The `context` Object contains all the relevant context to extract from. By default it only contains the HTTP request object.

```js
{
  request: request
}
```
