$(document).ready(function() {
    $(".js-nav-btn").click(function() {
	    $(".page").toggleClass("active");
	    $(".header__nav").slideToggle(300, function(){
	        if( $(this).css("display") === "none"){
	            $(this).removeAttr("style");
	        }
	    });
  	});
});

