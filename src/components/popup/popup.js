$(".button--header").click(function() {
	$(".popup").addClass("popup--active");
});

$(".popup-form__close").click(function() {
	$(".popup").removeClass("popup--active");
});
