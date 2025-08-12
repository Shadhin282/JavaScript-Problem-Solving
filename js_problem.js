// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

function tempToCelsi(temp){
    
      let farhrenheit = temp * 9/5 + 32 ;
      return farhrenheit ;
};

let tempInFarhren = tempToCelsi(39);
console.log(tempInFarhren);