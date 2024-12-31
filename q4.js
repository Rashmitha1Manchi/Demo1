function Student(name, branchName, grade){
    this.name = name;
    this.branchName = branchName;
    this.grade = grade;

    this.study = () => {
        return `${name} is studying in ${branchName} branch`;
    }

    this.getGrade = () => {
        return `${name} grade is ${grade}`;
    }
}

let s1 = new Student("Rama", "CSE", "A");
console.log(s1.study());
console.log(s1.getGrade());

let s2 = new Student("Ram", "ECE", "B+");
console.log(s2.study());
console.log(s2.getGrade());