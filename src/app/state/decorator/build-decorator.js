export default function buildDecorator(loader, decorator) {
  return function decorate(obj) {
    for (let keys of obj) {
      var val = obj[keys];
      obj[keys] = (typeof val === 'string') ? decorator(loader, val) : decorate(val, decorate);
    }
    return obj;
  };
}
