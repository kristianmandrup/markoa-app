import ViewsLoader from '../../../../src/app/loader/views-loader';
import PathResolver from '../../../../src/app/loader/resolver/path-resolver';

describe('ViewsLoader', () => {
  it('exists', () => {
    expect(ViewsLoader).to.not.be.undefined;
  });

  it('is a class (constructor)', () => {
    expect(ViewsLoader).to.be.a('function');
  });

  describe('constructor', () => {
    describe('empty config', () => {
      let loader = new ViewsLoader({});

      it('has config', () => {
        expect(loader.config).to.eql({});
      });

      it('has a pathResolver', () => {
        expect(loader.pathResolver).to.be.a(PathResolver);
      });

      it('has a paths Array', () => {
        expect(loader.paths).to.be.an(Array);
      });
    });
  });

  describe('instance', () => {
    // TODO: confirm this structure
    // can we improve it!? :)
    let config = {
      views: {
        root: 'root',
        pages: {
          active: ['index'],
          available: ['index', 'casino'],
          index: {
            root: 'my/path'
          }
        },
        assets: {
          root: 'public'
        }
      }
    };
    let loader = new ViewsLoader(config);

    describe('#resolveViewRootPaths', () => {
      it('resolves views rootPaths', () => {
        expect(loader.resolveViewRootPaths()).to.eql('root/my/path');
      });
    });

    describe.skip('#resolvePageTemplateRootPaths', () => {
      let oldIndexRootPath = loader.views.pages.index.rootPath;

      it('resolves rootPath for each active page', () => {
        loader.resolvePageTemplateRootPaths();
        expect(loader.views.pages.index.rootPath).to.not.eql(oldIndexRootPath);
      });
    });
  });
});
