import AppViewPathsResolver from '../../../../../../src/app/loader/resolver/views/app-view-paths-resolver';
import path from 'path';

let indexRootPath = 'repos/indexApp';
let mobilePath = 'mobile/casino';
let viewsRoot = 'views';
let assetsRoot = 'public';
let pagesRoot = 'my-pages';
let activePages = ['casino', 'mobile'];

let indexConfig = {
  rootPath: indexRootPath,
  pages: {
    active: activePages,
    main: 'casino',
    sub: [
      {mobile: mobilePath}
    ]
  },
  views: {
    root: viewsRoot,
    assets: {
      // used to build rootPath
      root: assetsRoot
    },
    pages: {
      root: pagesRoot
    }
  }
};

describe('AppViewPathsResolver', () => {
  it('exists', () => {
    expect(AppViewPathsResolver).to.not.be.undefined;
  });

  describe('instance', () => {
    let activeApps = ['index'];
    let mounted = {
      index: indexConfig
    };

    let apps = {
      active: activeApps,
      mounted: mounted
    };

    let conf = {
      apps: apps
    };

    let resolver = new AppViewPathsResolver(conf);

    describe('#apps', () => {
      it('returns apps Object', () => {
        expect(resolver.apps).to.eql(apps);
      });
    });

    describe('#activeApps', () => {
      it('returns list of active apps', () => {
        expect(resolver.activeApps).to.eql(activeApps);
      });
    });

    describe('#mountedApps', () => {
      it('returns list of active apps', () => {
        expect(resolver.mountedApps).to.eql(mounted);
      });
    });

    describe('#resolve', () => {
      resolver.resolve();
      let indexApp = resolver.mountedApps.index;
      let viewsPath = path.join(indexRootPath, viewsRoot);
      let assetsPath = path.join(viewsPath, assetsRoot);
      let pagesPath = path.join(viewsPath, pagesRoot);

      describe('views.rootPath', () => {
        it('resolves to repos/indexApp/views', () => {
          expect(indexApp.views.rootPath).to.eql(viewsPath);
        });
      });

      describe('views.assets.rootPath', () => {
        it('resolves to repos/indexApp/views/public', () => {
          expect(indexApp.views.assets.rootPath).to.eql(assetsPath);
        });
      });

      describe('views.pages.rootPath', () => {
        it('resolves to repos/indexApp/views/my-pages', () => {
          expect(indexApp.views.pages.rootPath).to.eql(pagesPath);
        });
      });
    });
  });
});
