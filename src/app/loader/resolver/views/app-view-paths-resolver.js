import ViewsResolver from './views-resolver';

export default class AppViewPathsResolver extends ViewsResolver {
  constructor(config) {
    super(config);
  }

  // dynamically configure view path (templates root folder) for each app
  // allows override by mounting a different path such as
  // from a different module!

  // apps: {
  //   mounted: {
  //     index: {
  //       views: {
  //         root: 'my/root'
  //       }
  //     }
  //   }
  // };
  resolve() {
    for (let app of this.activeApps) {
      let appObj = this.mountedApps[app];
      // should be views.pages after all?
      let rootPath = this.resolvePath(appObj.rootPath, appObj.views.root);
      this.mountedApps[app].views.rootPath = rootPath;
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
