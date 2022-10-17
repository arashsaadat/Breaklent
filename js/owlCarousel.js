
//owl carousel section------------------------------------------------
$(document).ready(function () {
	var owl = $(".items-owl");
	var singleOwl = $("#news-slider");
	owl.owlCarousel({
		loop: false,
		nav: true,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 1,
		autoplayHoverPause: true,

		responsive: {
			300: {
				items: 1
			},
			528: {
				items: 2
			},
			728: {
				items: 3
			},
			992: {
				items: 5
			}
		}
	});
	singleOwl.owlCarousel({
		nav: true,
		loop: false,
		margin: 0,
		autoplay: true,
		autoplayTimeout: 1,
		autoplayHoverPause: true,
		items: 1,
		dots: true
	});
	owl.on(".owl-stage", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("next.owl");
		} else {
			owl.trigger("prev.owl");
		}
		e.preventDefault();
	});
	singleOwl.on(".owl-stage", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("next.owl");
		} else {
			owl.trigger("prev.owl");
		}
		e.preventDefault();
	});
});
