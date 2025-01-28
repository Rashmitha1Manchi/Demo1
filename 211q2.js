<<<<<<< HEAD
function add(num, callback){
    let res = num + 10;
    callback(res);
}

function multiply(num, callback){
    let res = num*2;
    callback(res);
}

function sub(num, callback){
    let res = num - 3;
    callback(res);
}

multiply(5, (res1) =>{
    sub(res1, (res2) => {
        add(res2, (finalRes) => {
            console.log("Final result:"+finalRes);
        })
    })
=======
function add(num, callback){
    let res = num + 10;
    callback(res);
}

function multiply(num, callback){
    let res = num*2;
    callback(res);
}

function sub(num, callback){
    let res = num - 3;
    callback(res);
}

multiply(5, (res1) =>{
    sub(res1, (res2) => {
        add(res2, (finalRes) => {
            console.log("Final result:"+finalRes);
        })
    })
>>>>>>> a500ef41e4adae4d705e1017472fe84fe3bb6b3f
})