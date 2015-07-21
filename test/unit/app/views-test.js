import Views from '../../../src/app/views';

describe('Views', () => {
  it('exists', () => {
    expect(Views).to.not.be.undefined;
  });

  describe('constructor', () => {
    describe('empty config', () => {
      it('throws', () => {
        expect(() => new Views({})).to.throw;
      });
    });

    describe('has config', () => {
      // or should it when empty??
      it('does NOT throw', () => {
        expect(() => new Views({})).to.not.throw;
      });

      let mounted = ['casino', 'index'];
      let active = ['index'];

      let apps = {
        mounted: mounted,
        active: active
      };
      // TODO: can we make this better?
      let config = {
        apps: apps
      };

      let views = new Views(config);

      // fuck pages! use apps.active and apps.mounted
      describe('#apps', () => {
        it('has apps', () => {
          expect(views.apps).to.eql(apps);
        });
      });

      describe('#mountedApps', () => {
        it('is mounted list', () => {
          expect(views.mountedApps).to.eql(mounted);
        });
      });

      describe('#activeApps', () => {
        it('is active list', () => {
          expect(views.mountedApps).to.eql(mounted);
        });
      });

      // ...
    });
  });
});
