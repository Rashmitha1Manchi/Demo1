function calTot(...nums){
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return "Total sum:" +sum;
}

let ans = calTot(1,2,3,4,5);
console.log(ans)

let ans2 = calTot(10,20);
console.log(ans2)