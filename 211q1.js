<<<<<<< HEAD
function greet(name, callback){
    return callback("Hello") + name;
}

// function callback(msg){
//     return msg + " ";
// }

=======
function greet(name, callback){
    return callback("Hello") + name;
}

// function callback(msg){
//     return msg + " ";
// }

>>>>>>> a500ef41e4adae4d705e1017472fe84fe3bb6b3f
console.log(greet("Abc", (msg) => msg + " "));