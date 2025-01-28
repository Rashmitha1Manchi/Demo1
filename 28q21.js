<<<<<<< HEAD
function* fibonacci() {
    let [a, b] = [0, 1];

    while (true) {
      yield a;
      [a, b] = [b, a + b];
    }
}
  
const fibGen = fibonacci();
  
for(let i=0; i<5; i++){
    console.log(fibGen.next().value);
=======
function* fibonacci() {
    let [a, b] = [0, 1];

    while (true) {
      yield a;
      [a, b] = [b, a + b];
    }
}
  
const fibGen = fibonacci();
  
for(let i=0; i<5; i++){
    console.log(fibGen.next().value);
>>>>>>> a500ef41e4adae4d705e1017472fe84fe3bb6b3f
}