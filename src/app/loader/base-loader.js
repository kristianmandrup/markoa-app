import Configurator from '../../server/configurator';
import path from 'path';

export default class BaseLoader extends Configurator {
  constructor(config) {
    super(config);
    this.paths = config.paths || this.defaultPaths;
  }

  // to be overriden by subclass
  get defaultPaths() {
    return {};
  }

  get current() {
    return this.config.current;
  }

  get myRootPath() {
    return this.rootPath || this.config.current.rootPath;
  }

  resolveDir(type) {
    return path.resolve(path.join(this.myRootPath, this.paths[type]));
  }
}
