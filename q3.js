let Person = {
    name : "Rama",
    age : 16,

    greet(){
        return 'Name:' +this.name+ '\nAge:' +this.age;
    },

    isAdult(){
        if(this.age>18){
            return 'You are an adult';
        }
        return 'You are not an adult';
    }
}

console.log(Person.greet());
console.log(Person.isAdult());