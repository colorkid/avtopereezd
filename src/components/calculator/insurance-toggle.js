$('.calc__row.calc__row--insurance.calc__row--hide').slideFadeToggle('slow');

$('#insurance').click(function(){
    $(".calc__row--hide").slideFadeToggle('slow');
    $(this).parent().toggleClass("calc__cell--border-bottom-no");
});
