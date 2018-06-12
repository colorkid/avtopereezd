(function(){
  $('.main-menu__link').click(function(){
    let el = $(this).attr('href');
    let elWrapped = $(el);

    scrollToDiv(elWrapped, 80);
    return;
  });
      
  function scrollToDiv(element,navheight){
    let offset = element.offset();
    let offsetTop = offset.top;
    let totalScroll = offsetTop-navheight;

    $('body,html').animate({
      scrollTop: totalScroll
    }, 500);
  }
})();