const symbol1 = Symbol.for('Symbol');
const symbol2 = Symbol.for('Symbol');

console.log(symbol1 === symbol2);

const symbol3 = Symbol('Symbol');
const symbol4 = Symbol('Symbol');

console.log(symbol3 === symbol4);