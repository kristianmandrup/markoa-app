import Loader from '../../../src/app/loader';
import StateLoader from '../../../src/app/loader/state-loader';
import ViewsLoader from '../../../src/app/loader/views-loader';

describe('Loader', () => {
  it('exists', () => {
    expect(Loader).to.not.be.undefined;
  });

  it('is a class (constructor)', () => {
    expect(Loader).to.be.a('function');
  });

  describe('constructor', () => {
    describe('empty config', () => {
      let loader = new Loader({});

      it('has config', () => {
        expect(loader.config).to.eql({});
      });
    });
  });

  describe('static', () => {
    describe('#createFrom', () => {
      describe('state', () => {
        let conf = {
          state: 'content'
        };
        it('creates state loader', () => {
          expect(Loader.createFrom(conf)).to.be.a(StateLoader);
        });
      });

      describe('views', () => {
        let conf = {
          views: 'page'
        };

        it('creates views loader', () => {
          expect(Loader.createFrom(conf)).to.be.a(ViewsLoader);
        });
      });
    });
  });
});
