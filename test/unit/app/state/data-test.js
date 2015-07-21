import Data from '../../../../src/app/state/data';
import State from '../../../../src/app/state';

describe('Data', () => {
  it('exists', () => {
    expect(Data).to.not.be.undefined;
  });

  it('is a class (constructor)', () => {
    expect(Data).to.be.a('function');
  });

  describe('empty config', () => {
    it('throws', () => {
      expect(() => {
        let a = new Data({});
        a;
      }).to.throw;
    });
  });

  describe('#configure', () => {
    let state = new State();
    let props = {
      x: 2
    };

    it('sets data on state', () => {
      let data = new Data({});
      expect(data.configure(state, props)).to.be(data);
      expect(state.data).to.eql(props);
    });
  });
});
