"use strict";

const box = document.getElementById("box");
const box1 = document.getElementById("box1");

box.addEventListener("touchmove", (e) => {
	let x = e.touches[0].pageX;
	let y = e.touches[0].pageY;

	e.target.style.cssText = `
		transform: translateX(${x}px) translateY(${y}px);
		background: #ce0edf;
	`;  
});
box1.addEventListener("touchmove", (e) => {
	let x1 = e.touches[0].pageX;
	let y1 = e.touches[0].pageY;
	e.target.style.cssText = `
		transform: translateX(${x1}px) translateY(${y1}px); 
		bacground: #7866ff;
	`;
});

// box.addEventListener("touchstart", () => {
	// 	console.log("touchstart");
	// });
	
	// box.addEventListener("touchmove", () => {
	// 	console.log("touchmove");
	// });
	
	// box.addEventListener("touchend", () => {
	// 	console.log("touchend");
	// });


