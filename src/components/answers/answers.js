$.fn.slideFadeToggle = function(speed, easing, callback){
  return this.animate({opacity: 'toggle', height: 'toggle'}, 300, easing, callback);
};

$('.answer__description').slideFadeToggle('slow');

$('.answer').click(function(){
    $(this).children(".answer__description").slideFadeToggle('slow');
    $(this).toggleClass("answer--open");
});