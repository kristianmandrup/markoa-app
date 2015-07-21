import Configurator from '../../server/configurator';

export default class Data extends Configurator {
  constructor(config) {
    super(config);
  }

  configure(state, props = {}) {
    state.data = this.createDefaultData(props);
  }

  // TODO: Refactor and cleanup, use extra utility
  // method to branch off
  // Allowing props to be a name
  createDefaultData(props) {
    try {
      let name = props;
      let data;
      if (typeof props === 'object') {
        data = props.data || props;
        name = props.name;
      }
      return data || this.defaultData[props.name] || this.defaultData;
    } catch (e) {
      return {};
    }
  }

  get defaultData() {
    return this.defaults[this.constructor.name];
  }

  // override by subclass
  get defaults() {
    return this.config.defaults.state || {};
  }

  get loader() {
    return this.current.loader;
  }

  get current() {
    return this.config.current;
  }

  get fixture() {
    return this.loader.fixture;
  }

  get utils() {
    return this.config.utils;
  }

  get retriever() {
    return this.utils.retriever;
  }
}
