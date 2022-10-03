"use strict";
// For Each
const arr = [2,7,15,40,79,155];

arr.forEach((item,index,currentArray) => {
	console.log(`${index}: ${item}`);
});

const firstNames = ["An","Juli","Hayk","Mary","Kate"];
firstNames.forEach((item,index,currentArray) => {
	console.log(` ${item}`);
});

//Filter
const filteredArr = arr.filter((item,index,currentArray) =>{
	return item < 40;
});

const filteredNames = firstNames.filter(item => typeof(item) ==="string");

const ages = [5, 19,26,65,98,160];
const filteredAges = ages.filter((item,index,currentArray)=> {
	return index === 5;
});

const lastNames = ["Smith", "Anderson","Jackson","White"];
const filteredLastNames = lastNames.filter(item => (item[0] === "J"));

const userNames = ["alex", 33332,"dSAQRTT","pokowk33",12222];
const filteredUserNames = userNames.filter(item => typeof(item) === "number");

console.log(filteredUserNames);
console.log(filteredLastNames);
console.log(filteredAges);
console.log(filteredArr);
console.log(filteredNames);

// Map

const oldArr = [ 20,14,94,22,90,200];
const newArr = oldArr.map(item => item);

const oldNames = ["Fred", "David", "Jena","Pam"];
const newNames = oldNames.map(item => item);

console.log(newNames);
console.log(newArr);

// Reduce

const bills = [1500, 1600, 2000];
const newBills = [1550, 1620, 2200];
const allBills = [...bills, ...newBills];

const billsResult = allBills.reduce((total,current) => {
       return total + current;
}, 0);

console.log(billsResult);

const myNameLetters = ["J","U","L","I"];
const myName = myNameLetters.reduce((result, current, index ) => {
	return [
		...result,
		current
	];
	
},[]);
console.log(myName);

const itemsQuantity = [3,8,5,99,55];
const newItemsQuantity =[998,78,33,88,22]; 
const totalItems = [...itemsQuantity, ...newItemsQuantity];

const itemsRes = totalItems.reduce((total,current) => {
	return total * current;
}, 1);
console.log(itemsRes);

const friends = ["Joe","Frank","Jack","Patty"];
const newFriends = ["An","Juli","Henry"];
const totalFriends = [... friends, ...newFriends];

const allFriends =  totalFriends.reduce((total,current) =>{
	return total + " " + current;
}, " ");

console.log(allFriends);

// Some & Every
const someArr = [1,6,9,324,"aaad"];
const some = someArr.some(item => typeof(item) === "string");
console.log(some);

const every = someArr.every(item => typeof(item) === "number");
console.log(every);

//Find

const numbers = [98,76,12,77,89];
const findNumbers = numbers.find(item => item <= 76 );
const findLNums = numbers.findLast(item => item <= 76 );
const findNumsIndex = numbers.findIndex(item => item === 12);

console.log(findNumbers );
console.log(findLNums);
console.log(findNumsIndex);


// Fill
const arr1 = [1,2,3,5];
console.log(arr1.fill((4,2,3)));