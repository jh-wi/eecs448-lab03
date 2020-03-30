document.addEventListener("DOMContentLoaded", () => {
	let validate = document.querySelector("#validate");
	let p1 = document.querySelector("#password");
	let p2 = document.querySelector("#confirm");
	let error = document.querySelector("#errorText");
	
	validate.addEventListener("click", (e) => {
		error.innerText = "";
		if (p1.value.length < 8 || p2.value.length < 8) {
			error.innerText = "Password must be at least 8 characters.";
		} else if (p1.value != p2.value) {
			error.innerText = "Passwords do not match.";
		}
	});
});