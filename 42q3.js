const ee = require('events');
const emitter = new ee();

emitter.on('userDetails', (name, age) => {
  console.log(`Hello, ${name}! You are ${age} years old.`);
});

emitter.emit('userDetails', 'Mars', 23);