import Configurator from '../../server/configurator';
import Data from './data';

export default class State extends Configurator {
  constructor(config, data) {
    super(config);
    if (data) {
      this.configure(data);
    }
  }

  configure(data) {
    this.data = new Data(this.config).configure(this, data);
  }

  merge(data) {
    Object.assign(this.data, data);
  }

  mount(data, name) {
    if (typeof name !== 'string') {
      throw `Must mount data Object on named key, was: ${name}`;
    }
    Object.assign(this.data[name], data);
  }

  unmount(name) {
    if (typeof name !== 'string') {
      throw `Must unmount data Object by named key, was: ${name}`;
    }
    delete this.data[name];
  }
}
