function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.describe = function() {
    return `Name: ${this.name}, Age: ${this.age}`;
  };
  
  function Student(name, age, graded) {
    Person.call(this, name, age);
    this.graded = graded;
  }
  
  Student.prototype = Object.create(Person.prototype);
  
  Student.prototype.study = function() {
    return `${this.name} is studying for grade ${this.graded}.`;
  };
  
  const person1 = new Person("John", 30);
  console.log(person1.describe()); 
  
  const student1 = new Student("John", 20, "A");
  console.log(student1.describe());  
  console.log(student1.study());  
  