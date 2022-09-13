"use strict";
// Function Constructor 

function FavItem(name,brand,model,color,use,price) {
	this.name = name;
	this.color = color;
	this.use = use;
	this.price = price;
	this.brand = brand;
	this.model = model;
	this.isGood = function(bool){
		if (bool) {
			console.log(`${name} ${brand} ${model} is very useful for ${use}`);
		} else {
			console.log(`${name} ${brand} ${model} does not worth ${price} bucks`);
		}
	};
}


/*class FavItem{
	constructor(name,brand,model,color,use,price) {
	this.name = name;
	this.color = color;
	this.use = use;
	this.price = price;
	this.brand = brand;
	this.model = model;
	this.isGood = function(bool){
		if (bool) {
			console.log(`${this.name} ${this.brand} ${this.model} is very useful for ${this.use}`);
		} else {
			console.log(`${this.name} ${this.brand} ${this.model} does not worth ${this.price} bucks`);
		}
	};
	}
}
*/

const item1 = new FavItem("Laptop","Apple","MacBook Pro","Silver","prgramming",1500);
const item2 = new FavItem("TV","Samsung","QLed","Black","entertainment",1000);


item1.isGood(false);
item2.isGood(true);

const itemA= {
	name:"Laptop",
	brand:"Apple",
	model:"MacBook Pro",
	color:"Silver",
	price: 1500,
	use() {
		console.log("Used for programming");
	}
};
console.log(itemA);
const itemB = Object.create(itemA);
console.log(itemB);

const itemC = {
	color:"Black"
};
Object.setPrototypeOf(itemC,itemA);
console.log(itemC.price); 
const itemD = {
	name:"TV",
	brand:"Samsung",
	model:"Qled",
	color:"Black",
	price: 1000,
	use() {
		console.log("Used for entertainment");
	}
};
const returnedItems = Object.assign(itemA, itemD);
//console.log(item);
console.log(itemD);
