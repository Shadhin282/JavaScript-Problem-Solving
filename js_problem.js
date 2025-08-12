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

// Task-3:
// Write a function to count the number of vowels in a string.

function countVowel(strings){
    let count = 0;

    for (const string of strings){
        if(string ==="a" || string ==="e" || string === "o" || string === "u" || string === "i"){
        count = count + 1;
    }
    }
    return count;
}

const str = "i love you";
const countVow = countVowel(str);

console.log("Number of Vowel in a String : ",countVow);

// Task-4:
// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

function longWord(strings){
    let string = strings;
    let strWrd = string.split(' ');
    let max = strWrd[0].length
    for(const str of strWrd){
        
       if(str.length > max){
         max = str.length ;
       } 
    }
    
    for(const str of strWrd){
        if(str.length ===max){
           longWord = str;
        }
    }
    return longWord ;
}

let lstring = "I am learning Programming to become a programmer";
console.log(longWord(lstring));

// Task-5:
// Generate a random number between 10 to 20.

function randNum(){


    return Math.floor(Math.random() * 10);
}

const RandomNum = randNum();
console.log(RandomNum);


/**   Problem Solving Task 2 */

// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

function lowestNum(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num
        }
    }
    
    return min;
}

let heights = [167, 190, 120, 165, 137];
let lowestHeight = lowestNum(heights);

console.log(lowestHeight);

// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(height2){
     let smallName = height2[0].length;

     for(const sm of height2){
        if(sm.length < smallName){
            smallName = sm.length;
        }
     }
    for(const sm of height2){
        if(sm.length === smallName){
            smallName = sm;
        }
    }
    console.log(smallName);
}

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
smallestName(heights2);

