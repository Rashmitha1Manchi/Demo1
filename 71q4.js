function mergeObj(...obj){
    return Object.assign({}, ...obj);
}

const userDetails = {name: 'CVR', age: 25}
const userAddress = {city: 'Hyderabad'}
const userPreferences = {theme: 'Engineering Edu', language: 'EN'}

let mergedObj = mergeObj(userDetails, userAddress, userPreferences);
console.log(mergedObj)