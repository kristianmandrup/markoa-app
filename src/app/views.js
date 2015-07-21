import Configurator from './configurator';
import Loader from './loader';

export default class Views extends Configurator {
  constructor(config, views) {
    super(config);
    this.loader = new Loader(config).views;
    if (views) {
      this.configure(views);
    }
  }

  configure(views) {
    this.pages = views.pages;
  }
}
