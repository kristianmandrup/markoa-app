import ViewsResolver from './views-resolver';

export default class AppViewPathsResolver extends ViewsResolver {
  constructor(config) {
    super(config);
  }

  // configure rootPath for /assets and /pages folders
  // statics is where static assets live such as:
  // - images, fonts, css etc
  resolve() {
    for (let name of this.assetTypes) {
      this.resolveRoot(name);
    }
  }

  get resolvePath() {
    return this.pathResolver.resolvePath;
  }

  get defaultViews() {
    return this.config.default('views');
  }

  // TODO: fix
  // not sure if we should use config.rootPath
  // or defaultViews.rootPath
  get resolveRoot() {
    return this.pathResolver.rootResolver(this.defaultViews, this.defaultViews.rootPath);
  }

  // rootpath of server
  get rootPath() {
    return this.config.rootPath;
  }
}
