"use strict";

class Car {
	constructor(model,color){
		this.model = model;
		this.color = color;
	}
	static msg () {
		console.log("Try this car");
	}
	static price = 70000
}

class Van extends Car{}

Car.msg();
Van.msg();

console.log(Car.price);
console.log(Van.price);

//new.Car.msg();
//const van = new Car();
//test.hello();

class Person {
	constructor(username,age){
	this.userName = username;
	this.age = age;
    }
	static say() {
		console.log("Hello this is a new website");
	}
}

class Juli extends Person {
	constructor(username,age){
		super(username,age);
	}
}
Person.say();
Juli.say();