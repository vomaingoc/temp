
$(document).ready(function () {
  // $(".isDesktop .sticky").sticky({ topSpacing: 0 });

 // $(".isMobile .p-header .nav>li>a").on("click", function(){
 //     $(".navbar-toggle" ).click();
 // });
 //
 //
 //  if($('html').hasClass('isDesktop')){
 //    new WOW().init();
 //  };


    // $(".navbar-toggle" ).click(function() {
    //     $('body').toggleClass('blockp');
    // });

    if($('.list_news .item')){
      $('.isDesktop .list_news .item').matchHeight();
    }

    $( "#scroll_to_top" ).on('click', function(){
      $('html, body').animate({
       scrollTop: 0
     }, 800);
     return;
    })

});
