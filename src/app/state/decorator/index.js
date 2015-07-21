// TODO: do we really need this?
export default class Decorator {
  constructor(obj) {
    this.obj = obj;
  }

  decorate(decoratorFn) {
    return decoratorFn(this.obj);
  }
}
