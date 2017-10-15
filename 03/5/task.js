function romanicToArray(str) {
  const dict = { I: 1, IV: 4, V: 5, IX: 9, X: 10, XL: 40, L: 50, XC: 90, C: 100, CD: 400, D: 500, CM: 900, M: 1000 };
  const length = str
    .match(/(CM|CD|XC|XL|IX|IV|.)/g)
    .reduce((sum, current) => sum + dict[current], 0);

  return (isNaN(length)) ? undefined : [...Array(length).keys()];
}

const proto = Object.getPrototypeOf(Number.prototype);
const p = new Proxy(proto, {
  get: (target, name) => (name in target ? target[name] : romanicToArray(name))
});

Object.setPrototypeOf(Number.prototype, p);
