const revIter = (arr) => {
    return {
        [Symbol.iterator]() {
            let index = arr.length - 1;
            return {
                next() {
                    if (index >= 0) {
                        return { value: arr[index--], done: false };
                    }
                    return { value: undefined, done: true };
                }
            };
        }
    };
};
  
const arr = [1, 2, 3, 4];
const reverseIterator = revIter(arr);
  
for(let i of reverseIterator){
    console.log(i);
}