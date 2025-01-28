function* fibonacci() {
    let [a, b] = [0, 1];
    while (true) {
      yield a;
      [a, b] = [b, a + b];
    }
}
  
function* arraySequence(arr) {
    let index = 0;
    while (true) {
      yield arr[index % arr.length];
      index++;
    }
}
  
function* combinedSequence(arr) {
    const fibGen = fibonacci();
    const arrGen = arraySequence(arr);
    
    while (true) {
      yield fibGen.next().value;
      yield arrGen.next().value;
    }
}

const arr = [10, 20, 30, 40];
const combinedGen = combinedSequence(arr);
  
for(let i=0; i<10; i++){
    console.log(combinedGen.next().value);
}