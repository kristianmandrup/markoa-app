import Mounter from '../../../src/app/mounter';

describe('Mounter', () => {
  it('exists', () => {
    expect(Mounter).to.not.be.undefined;
  });

  describe('#mount(app, name)', () => {
    let app = {
      views: {
        pages: {
          rootPath: 'my/root'
        }
      }
    };
    let config = {};

    let mounter = new Mounter(config);

    it('mounts the app', () => {
      expect(mounter.mount(app, name)).to.eql(mounter);
    });

    describe('#mounted', () => {
      it('gets mounted app', () => {
        expect(mounter.mounted(name)).to.eql(app);
      });
    });

    describe('#unmount(app, name)', () => {
      it('unmounts the app', () => {
        expect(mounter.unmount(name)).to.eql(mounter);
        expect(mounter.mounted(name)).to.be(false);
      });
    });
  });
});
