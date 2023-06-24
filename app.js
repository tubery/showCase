// Hamburger menu
const hamburgerButton = document.querySelector(".hamburger-button");
const topBun = document.querySelector(".top-bun");
const patty = document.querySelector(".patty");
const bottomBun = document.querySelector(".bottom-bun");
const navMenu = document.querySelector(".nav-menu");
const navBar = document.querySelector("#nav-bar");
const logo = document.querySelector(".logo");

function menuIconToggle() {
	topBun.classList.toggle("close");
	patty.classList.toggle("close");
	bottomBun.classList.toggle("close");
	navMenu.classList.toggle("open");
	navBar.classList.toggle("open");
	logo.classList.toggle("open");
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
