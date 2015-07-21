import DefaultViewPathsResolver from '../../../../../src/app/loader/resolver/default-view-paths-resolver';

describe('DefaultViewPathsResolver', () => {
  it('exists', () => {
    expect(DefaultViewPathsResolver).to.not.be.undefined;
  });

  describe('DefaultViewPathsResolver', () => {
    let conf = {
      settings: {
        default: {
          views: {
            index: {
              root: 'index/root'
            },
            casino: {
              root: 'casino/root'
            }
          }
        }
      }
    };
    let resolver = new DefaultViewPathsResolver(conf);

    describe('#rootResolver', () => {
      it('has a config object', () => {
        expect(resolver.rootResolver(conf, 'statics')).to.be.a('function');
      });
    });
  });
});
