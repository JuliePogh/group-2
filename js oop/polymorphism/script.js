"use stict";

class Animal {
	say() {
		console.log("I'm an animal");
	}
}

class Dog extends Animal {
	say() {
		console.log("woof woof! I'm a dog");
	}
}

class Cat extends Animal {
	say() {
		console.log("meow meow! I'm a cat");
	}
}

const allAnimals = [new Animal(),new Dog(), new Cat()];
allAnimals.forEach(function(all){
	all.say();
    
});