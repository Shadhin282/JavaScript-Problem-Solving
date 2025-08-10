/**
 * array has some duplicate
 */



function noDuplicate(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item)=== false){
             unique.push(item);
        } 
        
        
    }
    return unique;
}
const biryanikhor = ['abul', 'babul', 'cabul', 'abul', 'babul', 'dabul', 'kabul', 'cabul'];
const numbers = [1,4,6,4,61,87,7,61,87];
const uniqueArray = noDuplicate(biryanikhor);
const uniqueNumber = noDuplicate(numbers)
console.log(uniqueArray)
console.log(uniqueNumber)