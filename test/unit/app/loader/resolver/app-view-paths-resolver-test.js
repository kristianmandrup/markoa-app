import AppViewPathsResolver from '../../../../../src/app/loader/resolver/app-view-paths-resolver';

describe('AppViewPathsResolver', () => {
  it('exists', () => {
    expect(AppViewPathsResolver).to.not.be.undefined;
  });

  describe('instance', () => {
    let rootPath = 'pages/index';
    let active = ['index'];
    let mounted = {
      index: {
        views: {
          root: rootPath
        }
      }
    };

    let apps = {
      active: active,
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
        expect(resolver.activeApps).to.eql(active);
      });
    });

    describe('#mountedApps', () => {
      it('returns list of active apps', () => {
        expect(resolver.mountedApps).to.eql(mounted);
      });
    });

    // is this needed anymore with new design?
    describe('#resolve', () => {
      resolver.resolve();

      it('resolves index rootPath to ???', () => {
        expect(resolver.mountedApps.index.rootPath).to.eql(rootPath);
      });
    });
  });
});
