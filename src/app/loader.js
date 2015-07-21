import Configurator from '../server/configurator';
import StateLoader from './loader/state-loader';
import ViewsLoader from './loader/views-loader';

export default class Loader extends Configurator {
  // Factory method to create Loader from options object
  // TODO: allow injection?
  static createFrom(config, options) {
    if (options) {
      this.rootPath = options.rootPath;
      if (options.state) {
        config.state = new StateLoader(options.state);
      }
      if (options.views) {
        config.views = new ViewsLoader(options.views);
      }
    }
    return config;
  }
}
