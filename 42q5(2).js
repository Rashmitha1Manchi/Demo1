const ee = require('./42q5(1)');
const em = new ee();

em.on('start', (msg) => console.log(msg));
em.on('in-progress', (msg) => console.log(msg));
em.on('completed', (msg) => console.log(msg));

em.start();
em.inProgress();
em.completed();