"use strict";

(function () {

	const inputBox = document.getElementById("js-word");
	const submit = document.getElementById("js-submit");
	const clear = document.getElementById("js-clear");
	const output = document.getElementById("js-output");
	
	function makeRequest(url) {
		const xhr = new XMLHttpRequest();
		xhr.open("GET", url);
		
		xhr.onload = function () {
			output.textContent = xhr.responseText;
		}
		
		xhr.error = function () {
			console.log(new Error);
		}
		
		xhr.send();
	}
	
	submit.addEventListener("click", function () {
		makeRequest("query?word=" + inputBox.value);
	});
	
	clear.addEventListener("click", function () {
		inputBox.value = "";
		output.textContent = "";
	});
	
})();