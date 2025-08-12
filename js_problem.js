// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

function tempToCelsi(temp){
    
      let farhrenheit = temp * 9/5 + 32 ;
      return farhrenheit ;
};

let tempInFarhren = tempToCelsi(39);
console.log(tempInFarhren);

/* Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0
*/

function countNumber(numbers, findNum){
   
     let count = 0;
    for(const num of numbers){
        if(num === findNum){
            count = count + 1;
           
        }
}
  return count;
}
let numbers =  [5,6,11,12,98, 5];
let findNum = 25;
console.log("Find : ", findNum);
const countRepeatNum = countNumber(numbers, findNum);

console.log("Count : ", countRepeatNum);