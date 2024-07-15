
// Write your code here
// Because the answer must be 62, the numbers must be hardcoded to 31 and 2.
const num1 = 31;
const num2 = 2;
let multiply = num1 * num2;

let random = Math.ceil(Math.random());
// console.log(random);

/*
	For some weird reason, JS returns the value of 24 % 5 as 4.8 and not 4.
	To return a whole number, we can call the Math.round() method to round
	up 5 or the Math.trunc() method to truncate it to 4.
	
	We can also call the Math.floor() method which rounds numbers down.
	
	Because here we want an answer of 4, we truncate the returned value with
	Math.trunc().
*/

const num3 = 24;
const num4 = 5;
let mod = Math.floor(num3 / num4);
// console.log(Math.trunc(mod))

/* 
	Math.max() accepts any number of numerical arguments and then returns the highest
	number. */
let max = Math.max(1, 3, 7, 20);