import BaseLoader from './base-loader';
import DefaultViewPathsResolver from './resolver/views/default-view-paths-resolver';
import AppViewPathsResolver from './resolver/views/app-view-paths-resolver';

// TODO: Clean this up! Simplify!!
export default class StateLoader extends BaseLoader {
  // generalize in Loader
  constructor(config) {
    super(config);
    // we need this?
    this.paths = config.paths || this.defaultPaths;
  }

  configure() {
    this.resolveDefaultViewPaths();
    this.resolveAppViewPaths();
  }

  resolveDefaultViewPaths() {
    new DefaultViewPathsResolver(this.config).resolve();
  }

  resolveAppViewPaths() {
    new AppViewPathsResolver(this.config).resolve();
  }

  // TODO: deprecated or move?
  // see default views resolver!!

  // object?
  get defaultPaths() {
    return this.config.default ? this.defaultLoaderPaths : {};
  }

  // object?
  // apps instead of views?
  get defaultLoaderPaths() {
    return this.config.default('views').loader.paths;
  }
}
