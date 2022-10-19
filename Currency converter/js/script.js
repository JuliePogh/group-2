"use strict";

const From_input = document.querySelector("#from");
const TO_input = document.querySelector("#to");

const From_input_l = document.querySelector("#from_l");
const TO_input_l = document.querySelector("#to_l");


From_input.addEventListener("input", (e) => {
	const request = new XMLHttpRequest();
                 //1)method 2) url, 3) async, 4) password
	request.open("GET","./data.json");
	request.setRequestHeader("content type", "application/json");
	request.send();
	
	//status, status text, response, readyState
	request.addEventListener("readystatechange", () => {
		if (request.readyState === 4 && request.status === 200 && From_input_l.value === "USD") {
			const data = JSON.parse(request.response);
			TO_input.value = (parseInt(e.target.value) / parseInt(data.value.usd)).toFixed(2);
		} else if (request.readyState === 4 && request.status === 200 && From_input_l.value === "EUR") {
			const data = JSON.parse(request.response);
			TO_input.value = (parseInt(e.target.value) / parseInt(data.value.eur)).toFixed(2);

       } else if (request.readyState === 4 && request.status === 200 && From_input_l.value === "RUB") {
		const data = JSON.parse(request.response);
		TO_input.value = (parseInt(e.target.value) / parseInt(data.value.rub)).toFixed(2); 
	}
	if (isNaN(TO_input.value)) {
		TO_input.value = "";
	}
});
 
}
);

