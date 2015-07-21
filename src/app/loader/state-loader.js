import BaseLoader from './base-loader';

export default class StateLoader extends BaseLoader {
  // generalize in Loader
  constructor(config) {
    super(config);
    this.defaultPaths = this.loader.paths;
  }

  get loaders() {
    return this.config.loaders;
  }

  get loader() {
    return this.config.default.state.loader;
  }

  fileLoader(type) {
    return (name, ext = 'json') => {
      return this.loader.file.load(this.resolveDir(type), name, ext);
    };
  }

  fromStore(name) {
    return this.loaders.store(name);
  }

  provide(name) {
    return this.loaders.provider(name);
  }
}
