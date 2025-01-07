const colors = ['red', 'green', 'blue', 'yellow'];

const [fir, sec] = colors;
console.log(fir+" "+sec);

let [,second,,fourth] = colors;
console.log(second+" "+fourth);