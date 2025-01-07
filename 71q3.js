function updEmp(emp, newRole){
    return {...emp, role: newRole};
}

let emp1 = {
    name: 'John',
    role: 'Developer',
    age: 30,
    location: 'Hyd'
}
let updEmp1 = updEmp(emp1, 'Manager');
console.log(updEmp1)