const discountCode = document.getElementById("discount-code");
const enterDiscountCode = document.querySelector(".enter-discount-code");
const removeDiscountCode = document.querySelector(".remove-discount-code");
const removeDiscountCodeIcon = document.querySelector(".remove-discount-icon");
const descriptionSectionOnOff = document.querySelector("#description-section-on-off");
const productDescriptionSection = document.querySelector(".product-description-section");
const descriptionSectionOnOffIcon = document.querySelector(".description-section-on-off-icon");
// discountCode section start
discountCode.addEventListener("click", function (e) {
	enterDiscountCode.classList.add("active");
	removeDiscountCode.classList.add("active");
});
removeDiscountCode.addEventListener("click", function (e) {
	enterDiscountCode.classList.remove("active");
	removeDiscountCode.classList.remove("active");
});
removeDiscountCodeIcon.addEventListener("click", function (e) {
	enterDiscountCode.classList.remove("active");
	removeDiscountCode.classList.remove("active");
});
// discountCode section end

// descriptionSectionOnOff start
descriptionSectionOnOff.addEventListener("click", function (e) {
	productDescriptionSection.classList.toggle("active");
	descriptionSectionOnOffIcon.classList.toggle("active");

});
// descriptionSectionOnOff end
//start cart

//end cart
