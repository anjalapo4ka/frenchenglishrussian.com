$(document).ready(function() {
   $(".header__list a").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href").match(/#.*$/)[0]).offset().top + "px"
      }, {
         duration: 500,
         easing: "swing"
      });
      return false;
   });
});


