import path from 'path';
import util from 'util';

export default class PathResolver {
  resolvePath(root, folder) {
    if (!root) {
      throw 'missing root in resolvePath';
    }
    if (!folder) {
      throw 'missing folder in resolvePath';
    }

    return path.resolve(path.join(root, folder));
  }

  get rootKey() {
    return 'root';
  }

  rootResolver(conf, root) {
    return (name) => {
      var obj = conf[name];
      if (!obj) {
        throw `No key ${name} in Object ${util.inspect(conf)}`;
      }
      var rootPath = obj[this.rootKey];
      if (!rootPath) {
        throw `missing .${this.rootKey} in ${util.inspect(obj)}`;
      }
      conf[name].rootPath = this.resolvePath(root, rootPath);
    };
  }
}
