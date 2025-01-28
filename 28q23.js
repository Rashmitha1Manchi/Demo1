<<<<<<< HEAD
function* cumulativeSum(arr) {
    let sum = 0;
    for (let num of arr) {
      sum += num;
      yield sum;
    }
    return sum;
}
  

const arr = [1, 2, 3, 4, 5];
const gen = cumulativeSum(arr);
  
let result = gen.next();
while (!result.done) {
    console.log(result.value);
    result = gen.next();
}
  
=======
function* cumulativeSum(arr) {
    let sum = 0;
    for (let num of arr) {
      sum += num;
      yield sum;
    }
    return sum;
}
  

const arr = [1, 2, 3, 4, 5];
const gen = cumulativeSum(arr);
  
let result = gen.next();
while (!result.done) {
    console.log(result.value);
    result = gen.next();
}
  
>>>>>>> a500ef41e4adae4d705e1017472fe84fe3bb6b3f
console.log("Final sum:", result.value);  