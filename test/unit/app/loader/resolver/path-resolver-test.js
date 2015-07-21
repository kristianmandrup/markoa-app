import PathResolver from '../../../../../src/app/loader/resolver/path-resolver';

describe('PathResolver', () => {
  it('exists', () => {
    expect(PathResolver).to.not.be.undefined;
  });

  describe('instance', () => {
    let resolver = new PathResolver({});
    let conf = {
      statics: {
        rootPath: 'assets'
      }
    };

    describe('#rootResolver', () => {
      let resolvePath = resolver.rootResolver(conf, 'statics');

      it('returns a function', () => {
        expect(resolvePath).to.be.a('function');
      });

      it('x resolves to assets/x', () => {
        expect(resolvePath('x')).to.eql('assets/x');
      });
    });
  });
});
