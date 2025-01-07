function mergeArrays(action, ...arr){
    return action +[].concat(arr);
}

let res = mergeArrays("Merged array:", [1,2],[3,4],[5,6]);
console.log(res);

let res1 = mergeArrays("Merged array:", [1,2],[5,6]);
console.log(res1);