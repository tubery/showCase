// Hamburger menu
const hamburgerButton = document.querySelector(".hamburger-button");
const topBun = document.querySelector(".top-bun");
const patty = document.querySelector(".patty");
const bottomBun = document.querySelector(".bottom-bun");
const navMenu = document.querySelector(".nav-menu");
const navBar = document.querySelector("#nav-bar");

// About section
const earth = document.querySelectorAll(".earth");
const aboutTitle = document.querySelectorAll(".about-title");
const aboutText = document.querySelectorAll(".about-text");

// Web dev section
const webDevTitle = document.querySelectorAll(".web-dev-title");
const cards = document.querySelectorAll(".card");
const saturn = document.querySelectorAll(".saturn");

// FaC section
const facText = document.querySelectorAll(".fac-text");

// Hamburger functionality
function menuIconToggle() {
	topBun.classList.toggle("close");
	patty.classList.toggle("close");
	bottomBun.classList.toggle("close");
	navMenu.classList.toggle("open");
	navBar.classList.toggle("open");
	hamburgerButton.classList.toggle("open");
}

function addObserver(item) {
	item.forEach((element) => observer.observe(element));
}

hamburgerButton.addEventListener("click", () => {
	if (hamburgerButton.dataset.state === "open") {
		// Change to X
		hamburgerButton.setAttribute("data-state", "close");
		menuIconToggle();
	} else {
		// Return to hamburger
		hamburgerButton.setAttribute("data-state", "open");
		menuIconToggle();
	}
});

// Close menu
function closeNav() {
	hamburgerButton.setAttribute("data-state", "open");
	menuIconToggle();
}

// Observer options for animations
let options = {
	rootMargin: "0px",
	threshold: 0.5,
};
// Intersection observer
const intersectionCallback = (items) => {
	items.forEach((item) => {
		if (item.isIntersecting) {
			item.target.classList.add("show");
		}
	});
};
const observer = new IntersectionObserver(intersectionCallback, options);

addObserver(earth);
addObserver(aboutTitle);
addObserver(aboutText);
addObserver(webDevTitle);
addObserver(saturn);
addObserver(cards);
addObserver(facText);
