if($('#insurance').length !== 0){
	$('.calc__row.calc__row--insurance.calc__row--hide').slideFadeToggle('slow');
}

$('#insurance').click(function(){
    $(".calc__row--hide").slideFadeToggle('slow');
    $(this).parent().toggleClass("calc__cell--border-bottom-no");
});

$('.calc__label.calc__label--checkbox').click(function(){
	$(this).toggleClass("calc__label--active-checkbox");
});