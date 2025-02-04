function infiniteSequence(maxSteps) {
    let current = 1;
    let count = 0;
    
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            if (count < maxSteps) {
                count++;
                return { value: current++, done: false };
            }
            return { value: undefined, done: true };
        }
    };
}
  
const sequence = infiniteSequence(5);
  
for (const number of sequence) {
    console.log(number);
}
  