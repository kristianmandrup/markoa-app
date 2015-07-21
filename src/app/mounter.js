import Configurator from '../server/configurator';

// used by Application to mount sub-applications (pages)
export default class Mounter extends Configurator {
  mount(application, name) {
    this.mounted[name] = application;
    return this;
  }

  unmount(name) {
    delete this.mounted[name];
    return this;
  }

  get mounted() {
    return this.config.mounted;
  }
}

