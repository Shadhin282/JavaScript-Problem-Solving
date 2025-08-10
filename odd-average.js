/**
 * function takes an array as parameter
 * give me the average of the odd numbers in the array
 */

function oddAverage(numbers){
    const odds = []
    for(const number of numbers){
        if(number % 2===1){
            console.log(number)
            odds.push(number)
        }
    }
    // odds only array for containing odd numbers.
    console.log(odds)
     let sum = 0;
    for(const number of odds){
        sum = number + sum
        console.log(sum)
        
    }
    const count = odds.length ;
    const avg = sum / count;
    return avg
}   

const numbers = [42, 13, 58, 65, 81,8,9,10];
const avg = oddAverage(numbers)
console.log("Average of the odd numbers is: ", avg)
console.log()
