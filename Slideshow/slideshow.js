document.addEventListener("DOMContentLoaded", () => {
	let next = document.querySelector("#next");
	let prev = document.querySelector("#prev");

	let pic1 = document.querySelector("#pic1");
	let pic2 = document.querySelector("#pic2");
	let pic3 = document.querySelector("#pic3");
	let pic4 = document.querySelector("#pic4");
	let pic5 = document.querySelector("#pic5");

	let slide = 0;

	let slides = [pic1, pic2, pic3, pic4, pic5];

	for (let i = 0; i < 5; i++) {
		slides[i].style.visibility = "hidden";
		slides[i].style = "position:absolute; top=10; left=10;";
		if (i == slide) { slides[i].style.visibility = "visible" }
	}
	
	next.addEventListener("click", (e) => {
		slide++;
		if (slide > 4) { slide = 0; }
		for (let i = 0; i < 5; i++) {
			slides[i].style.visibility = "hidden";
			if (i == slide) {
				slides[i].style.visibility = "visible";
				slides[i].style = "position:absolute; top=10; left=10;";
			}
		}
	});

	prev.addEventListener("click", (e) => {
		slide--;
		if (slide < 0) { slide = 4; }
		for (let i = 0; i < 5; i++) {
			slides[i].style.visibility = "hidden";
			if (i == slide) {
				slides[i].style.visibility = "visible";
				slides[i].style = "position:absolute; top=10; left=10;";
			}
		}
	});
});