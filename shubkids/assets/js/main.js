 $(".title_page").addClass("wow fadeInUp");
  $(" .section_home_2 .item, .slider_b__content .list .item, .page_intro .title, .list_circle .item, .page_intro .section_4 .txt3").addClass("wow fadeInUp");
  $(" .logo_footer, .list_news .item ").addClass("wow fadeIn");
  $("  .p-header .nav>li>a span.sp1").addClass("wow fadeIn");



$(document).ready(function () {
  // $(".isDesktop .sticky").sticky({ topSpacing: 0 });

 // $(".isMobile .p-header .nav>li>a").on("click", function(){
 //     $(".navbar-toggle" ).click();
 // });
 //
 //
  if($('html').hasClass('isDesktop')){
    new WOW().init();
  };


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

    function hoverintro(x){
        $('.item_hover_intro .x00' + x).on("mouseenter",function(){
            $('.intro_x').find(".img_x-" + x).addClass("active");
        })

        $('.item_hover_intro .x00' + x).on("mouseleave",function(){
            $('.intro_x').find(".img_x-" + x).removeClass("active");
        })
    }

    hoverintro(2)
    hoverintro(3)
    hoverintro(4)
    hoverintro(5)

});
