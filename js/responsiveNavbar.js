const carLogo = document.querySelector("#car-logo");
const navbarToggler = document.querySelector("#navbar-togg-buttom ");
const responsiveNavabar = document.querySelector(".responsive-navabar");
const responsiveChild = document.querySelector(".responsive-child");
const lineOne = document.querySelector(".line-one");
const lineTwo = document.querySelector(".line-two");
const lineThree = document.querySelector(".line-three");
const search = document.getElementById("search");
const searchSuggestion = document.querySelector(".search-suggestion");
const showSuperMenu = document.querySelector("#show-super-menu");
const superMenu = document.querySelector(".super-menu");
const responsivNavbarProduct = document.querySelector("#responsiv-navbar-product");
const responsivNavbarProductDropdown = document.querySelector(".responsiv-navbar-product-dropdown");

navbarToggler.addEventListener("click", () => {
	responsiveNavabar.classList.toggle("active");
	responsiveChild.classList.toggle("active");
	lineOne.classList.toggle("active");
	lineTwo.classList.toggle("active");
	lineThree.classList.toggle("active");
});
responsiveChild.addEventListener("click", () => {
	responsiveChild.classList.remove("active");
	responsiveNavabar.classList.remove("active");
	lineOne.classList.remove("active");
	lineTwo.classList.remove("active");
	lineThree.classList.remove("active");
});
search.addEventListener("click", () => {
	searchSuggestion.classList.add("active");
});
search.addEventListener("blur", () => {
	blur();
});
const blur = () => {
	alert("Please2");
};
// super header

// showSuperMenu.addEventListener("mouseover", () => {
// 	superMenu.classList.add("active");
// });
// showSuperMenu.addEventListener("mouseout", () => {
// 	superMenu.classList.remove("active");
// });
// superMenu.addEventListener("mouseover", () => {
// 	superMenu.classList.add("active");
// });
// superMenu.addEventListener("mouseout", () => {
// 	superMenu.classList.remove("active");
// });
// responsivNavbarProduct

$("#responsiv-navbar-product").click(function () {
	$(".responsiv-navbar-product-dropdown").slideToggle();
});
