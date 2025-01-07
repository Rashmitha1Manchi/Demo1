function updProInfo(pro, dis, inStock){
    let {id, name} = pro;
    let updPro = {id, name, dis, inStock};
    return updPro;
}

let pro1 = {
    id: 101, 
    name: 'Laptop', 
    price: 1000,
    category:'Electronics'
}
let updPro = updProInfo(pro1, 10, true);
console.log(updPro)