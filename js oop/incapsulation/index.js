"use strict";
 class Data {
	constructor(name,lastName){
		this.name = name;
		this.lastName = lastName;
		//this._secCode = secCode;
	}
	#secCode = 11222

	#info() {
		console.log(`name: ${this.name}, lastname: ${this.lastName}, security code: ${this.#secCode}`);
	}
 }

 /*get getCode(){
	return this.#secCode;
 }

 set getCode(newCode){
	this.#secCode = newCode;

 }*/
 
 const juli = new Data("Juli", "Poghosyan");
 juli.#info();
 juli.#secCode = 3322121;
console.log(juli);
juli.#secCode;

//console.log(juli.getCode);
//juli.getCode = 7987;
//console.log(juli.getCode);

function Person (age, location) {
	this.age = age;
	let place = location;
	
	this.find = function(){
		console.log(`age: ${this.age}, location: ${this.location}`);
	};
}
 const alex = new Person(32, "US");
 console.log(alex);
 alex.find();


