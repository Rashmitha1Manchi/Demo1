function createProfile(obj){
    let {name, age, interests: [first, second, ]} = obj;

    return {name, age, interests: [first, second]};
}

let profile = {
    name: "John",
    age: 30,
    interests : ['Sleeping', 'Eating', 'Reading']
}

let res = createProfile(profile)
console.log(res);