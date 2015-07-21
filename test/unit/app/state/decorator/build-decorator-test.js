import Loader from '../../../../../src/app/loader';
import buildDecorator from '../../../../../src/app/state/decorator/decorators';

describe('#buildDecorator', () => {
  it('exists', () => {
    expect(buildDecorator).to.not.be.undefined;
  });

  it('can build a decorator function', () => {
    let conf = {};
    let loader    = new Loader(conf);
    let myDecorator = (x) => {
      return `${x}-called`;
    };
    let decorator = buildDecorator(loader, myDecorator);

    expect(decorator('v')).to.eql('v-called');
  });
});
