import Configurator from '../server/configurator';
import State from './state';
import Views from './views';

// Each page is a separate application potentially
// with its own subset of the Server config namely:
// - custom views config (location of template)
// - custom state

export default class Application extends Configurator {
  // TODO: must validate config
  constructor(config, name) {
    super(config);
    this.name = name;

    // this.createDefaults(config);
    this.createViews(config);
    this.createState(config);
  }

  createDefaults(config) {
    this.defaults = config.defaults || {state: {}, views: {}};
  }

  // create a View config
  createViews(config) {
    this.views = new Views(config);
  }

  // create a State
  createState(config) {
    this.state = new State(config);
  }

  init() {
    this.views.configure();
    this.state.configure();
    return this;
  }

  mount(config = {}) {
    this.mountViews(config.views);
    this.mountState(config.state);
  }

  // TODO: validate?
  mountViews(views = {}) {
    this.views = views;
  }

  // TODO: validate?
  mountState(state = {}) {
    this.state = state;
  }

  static createDefault(config) {
    return new Application({
      state: new State(config),
      views: new Views(config)
    });
  }
}
