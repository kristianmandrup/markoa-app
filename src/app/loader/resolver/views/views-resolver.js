import Configurator from '../../../../server/configurator';
import PathResolver from '../path-resolver';

export default class ViewsResolver extends Configurator {
  constructor(config) {
    super(config);
    this.pathResolver = new PathResolver();
  }

  resolve() {
    throw 'subclass must override!';
  }
}
