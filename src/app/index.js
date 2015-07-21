import Configurator from './configurator';
import State from './state';
import Views from './views';

// Each page is a separate application potentially
// with its own subset of the Server config namely:
// - custom views config (location of template)
// - custom state

export default class App extends Configurator {
  // TODO: must validate config
  constructor(config, name) {
    super(config);
    this.name = name || 'default';

    this.views = new Views(config);
    this.state = new State(config);
  }

  createDefaults(defaults) {
    this.defaults = defaults || {state: {}, views: {}};
    return this;
  }

  // create a View config
  createViews(views) {
    this.views.configure(views);
    return this;
  }

  // create a State
  createState(state) {
    this.state.configure(state);
    return this;
  }

  init() {
    // calculate real rootPaths for views
    this.views.configure();
    // decorate state etc. if needed
    this.state.configure();
    return this;
  }

  mount(config = {}) {
    this.mountViews(config.views);
    this.mountState(config.state);
    return this;
  }

  // TODO: validate?
  mountViews(views = {}) {
    this.views = views;
    return this;
  }

  // TODO: validate?
  mountState(state = {}) {
    this.state = state;
    return this;
  }

  static createDefault(config) {
    return new App({
      state: new State(config),
      views: new Views(config)
    });
  }
}
