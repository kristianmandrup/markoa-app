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

    describe('#createDefaults(defaults)', () => {
      let defaultsConf = {
        views: {
          pages: {
            rootPath: 'my/root'
          }
        },
        state: {
          cms: 'http://xyz'
        }
      };

      // defaults || {state: {}, views: {}};
      it('creates a default configuration', () => {
        let res = app.createDefaults(defaultsConf);
        expect(res).to.eql(app);
        expect(app.defaults).to.eql(defaultsConf);
      });

      // defaults || {state: {}, views: {}};
      it('creates an emmpty defaults configuration', () => {
        let emptyConf = {state: {}, views: {}};
        let res = app.createDefaults();
        expect(res).to.eql(app);
        expect(app.defaults).to.eql(emptyConf);
      });
    });

    describe('#createViews(views)', () => {
      let pages = {
        rootPath: 'my/root'
      };
      let viewsConf = {
        pages: pages
      };

      // defaults || {state: {}, views: {}};
      it('creates views config', () => {
        let res = app.createViews(viewsConf);
        expect(res).to.eql(app);
        expect(app.views.pages).to.eql(pages);
      });
    });

    describe('#createState(state)', () => {
      let stateConf = {
        content: {
          cms: 'http://xyz'
        }
      };

      // defaults || {state: {}, views: {}};
      it('creates state config', () => {
        let res = app.createState(stateConf);
        expect(res).to.eql(app);
        expect(app.views.pages).to.eql({cms: 'http://xyz'});
      });
    });
  });
});
