import ViewsResolver from './views-resolver';

export default class AppViewPathsResolver extends ViewsResolver {
  constructor(config) {
    super(config);
  }

  // dynamically configure view path (templates root folder) for each app
  // allows override by mounting a different path such as
  // from a different module!
  resolve() {
    for (let app of this.activeApps) {
      this.mountedApp[app].rootPath = this.resolvePath(this.mountedApps.rootPath, app);
    }
  }

  get apps() {
    return this.config.apps;
  }

  get activeApps() {
    return this.apps.active;
  }

  get mountedApps() {
    return this.apps.mounted;
  }

  get resolvePath() {
    return this.pathResolver.resolvePath;
  }
}
