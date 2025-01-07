function createProfile(obj){
    let {name, email} = obj;
    return {name, email};
}

let obj = {
    name: 'John',
    age: 30,
    email: 'john@gmail.com',
    address: 'NY'
}

let resObj = createProfile(obj);
console.log(resObj);