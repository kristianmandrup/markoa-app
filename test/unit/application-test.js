import App from '../../src/app';

describe('App', () => {
  it('exists', () => {
    expect(App).to.not.be.undefined;
  });

  it('is a class (constructor)', () => {
    expect(App).to.be.a('function');
  });

  describe('instance', () => {
    let app = new App();
    let views = {
      pages: {
        rootPath: 'my/root'
      }
    };
    let state = {
      content: {
        title: 'hello'
      }
    };

    describe('#mountViews', () => {
      let res = app.mountViews(views);

      it('mounts views', () => {
        expect(res).to.eql(app);
        expect(res.views).to.eql(views);
      });
    });

    describe('#mountState', () => {
      let res = app.mountState(state);

      it('mounts state', () => {
        expect(res).to.eql(app);
        expect(res.state).to.eql(state);
      });
    });

    describe('#mount', () => {
      it('chains and mounts views', () => {
        let res = app.mount(views);
        expect(res).to.eql(app);
        expect(res.views).to.eql(views);
      });

      it('chains and mounts state', () => {
        let res = app.mount(views);
        expect(res).to.eql(app);
        expect(res.state).to.eql(state);
      });
    });
  });
});
