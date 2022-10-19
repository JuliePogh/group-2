"use strict";
//1
// factorial with recursion

function fact(num) {
	if(num <= 1){
		return 1;
	}
	return num * fact(num - 1);
}
console.log(fact(6));

// fibonaci with recursion 

function fib(num){
	if (num < 2) {
	return num;
}
	return fib(num - 1) + fib(num - 2);
}
 console.log(fib(5));
 console.log(fib(10));
 console.log(fib(15));

 // recursion examples

 function decreaseNum( number) {
	console.log(number);
	const newNumber = number - 1;
	if(newNumber > 0){
		decreaseNum(newNumber);
	}
 }
 
 decreaseNum(10);

 
 function countToTen(num) {
	console.log(num);
    const n = num +1;
	if(n < 10){
		countToTen(n);
	}
}
countToTen(0);

function calculateTotal(n, total = 0) {
	if(n === 0)
	return total;
	return calculateTotal (n - 1, total += n);
}
console.log(calculateTotal(2,3));


