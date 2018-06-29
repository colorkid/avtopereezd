$(document).ready(function(){
    $(document).bind("scroll",function(){
        $(".wrapper").each(function(){
          	var position = $(this).offset().top;
          	var classToBeAdded = "visible";
          
          	if (position+200 < $(window).scrollTop() + $(window).height()){
            	$(this).addClass("fadeIn");
          	}
                 
          	/*if (position+$(this).height()+600 < $(window).scrollTop() + $(window).height()){
                $(this).removeClass("fadeIn");
          	}      */     
          
        });
    });
});