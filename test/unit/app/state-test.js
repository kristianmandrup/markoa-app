import State from '../../../src/app/state';

describe('State', () => {
  it('exists', () => {
    expect(State).to.not.be.undefined;
  });

  it('is a class (constructor)', () => {
    expect(State).to.be.a('function');
  });

  describe('empty config', () => {
    it('throws', () => {
      expect(() => {
        var a = new State({});
        a;
      }).to.throw;
    });
  });

  describe('content configuration', () => {
    let content = {
      x: 2
    };
    let conf = {
      content: content
    };

    it('does NOT throw', () => {
      expect(() => new State(conf)).to.not.throw;
    });

    it('sets content data', () => {
      let state = new State(conf);
      expect(state.content.data).to.eql(content);
    });
  });

  describe('#mount', () => {
    let content = {
      x: 2
    };
    let conf = {
      page: {}
    };
    let state = new State(conf);

    it('mounts and chains', () => {
      expect(state.content).to.be.undefined;
      expect(state.mount(content, 'content')).to.eql(state);
      expect(state.content).to.eql(content);
    });

    describe('#unmount', () => {
      let state = new State();

      it('mounts and chains', () => {
        expect(state.unmount('content')).to.eql(state);
        expect(state.content).to.be.undefined;
      });
    });
  });
});
