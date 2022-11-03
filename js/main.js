$(document).ready(function () {
	$(".cart-number-up").click(function () {
		var value = parseInt($(this).parent().find("input[type=number]").val());
		if (value < 5) {
			$(this)
				.parent()
				.find("input[type=number]")
				.val(value + 1);
		}
	});

	$(".cart-number-down").click(function () {
		var value = parseInt($(this).parent().find("input[type=number]").val());
		if (value > 1) {
			$(this)
				.parent()
				.find("input[type=number]")
				.val(value - 1);
		}
	});
	$(".addres-item").click(function () {
		$(".addres-item").removeClass("active");
		$(".active-address-section").removeClass("active");
		$(this).addClass("active");
		$(this).find(".active-address-section").addClass("active");
	});
    $(".select-post-item").click(function () {
		$(".select-post-item").removeClass("active");
		$(this).addClass("active");
	});
});

