import Configurator from '../server/configurator';
import Loader from './loader';

export default class Views extends Configurator {
  constructor(config) {
    super(config);
    this.loader = new Loader(config).views;
  }
}
