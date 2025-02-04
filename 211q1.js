function greet(name, callback){
    return callback("Hello") + name;
}

// function callback(msg){
//     return msg + " ";
// }

console.log(greet("Abc", (msg) => msg + " "));