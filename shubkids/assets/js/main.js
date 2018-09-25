$(".title_page").addClass("wow fadeInUp");
$(" .section_home_2 .item, .slider_b__content .list .item, .page_intro .title, .list_circle .item, .page_intro .section_4 .txt3, h2.title").addClass("wow fadeInUp");
$(" .logo_footer, .list_news .item ").addClass("wow fadeIn");
$("  .p-header .nav>li>a span.sp1").addClass("wow fadeIn");

$(document).ready(function() {
  // $(".isDesktop .sticky").sticky({ topSpacing: 0 });

  // $(".isMobile .p-header .nav>li>a").on("click", function(){
  //     $(".navbar-toggle" ).click();
  // });
  //
  //
try {
    if ($('html').hasClass('isMobile')) {
       $('.list_1_home_page').owlCarousel({
           loop:true,
           margin:0,
           nav:true,
           items:1
       });
    };
} catch (e) {

} finally {

}

  if ($('html').hasClass('isDesktop')) {
    new WOW().init();
  };

  // $(".navbar-toggle" ).click(function() {
  //     $('body').toggleClass('blockp');
  // });

  if ($('.list_news .item')) {
    $('.list_news .item').matchHeight();
  }

  $("#scroll_to_top").on('click', function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return;
  })

  $('.intro_x').find(".img_x").on('click', function() {
    $(this).addClass('clicked')
  })
  $(".img_x .btn_close").on('click', function() {
    closeDetail()
  })

  function closeDetail(){
      $('.item_hover_intro').find(".dot").removeClass("op0");
      $('.item_hover_intro').find(".dot").removeClass("dothover");
      $('.intro_x').find(".img_x").removeClass("active");
      $('.intro_x').find(".img_x").removeClass("clicked");
  }

  function hoverintro(x) {
    $('.item_hover_intro .x00' + x).on("mouseenter", function() {
      $('.item_hover_intro').find(".dot").removeClass("op0");
      $('.item_hover_intro').find(".dot").removeClass("dothover");
      $('.intro_x').find(".img_x").removeClass("active");
      $('.intro_x').find(".img_x").removeClass("clicked");

      $('.intro_x').find(".img_x-" + x).addClass("active");
      $(this).addClass('dothover');
      $(this).siblings().addClass('op0');
    })
  }

  function clickintro(x) {
    $('.item_hover_intro .x00' + x).on("click", function() {
      $('.item_hover_intro').find(".dot").removeClass("op0");
      $('.item_hover_intro').find(".dot").removeClass("dothover");
      $('.intro_x').find(".img_x").removeClass("active");
      $('.intro_x').find(".img_x").removeClass("clicked");

      $('.intro_x').find(".img_x-" + x).addClass("active");
      $(this).addClass('dothover');
      $(this).siblings().addClass('op0');
    })
  }
  $('.intro_x').on("mouseleave", function() {
    $('.item_hover_intro').find(".dot").removeClass("op0");
    $('.item_hover_intro').find(".dot").removeClass("dothover");
    $('.intro_x').find(".img_x").removeClass("active");
    $('.intro_x').find(".img_x").removeClass("clicked");
  })

  if($('html').hasClass('isDesktop')){


      hoverintro(2)
      hoverintro(3)
      hoverintro(4)
      hoverintro(5)
  }
  else if ($('html').hasClass('isMobile')) {
      clickintro(2)
      clickintro(3)
      clickintro(4)
      clickintro(5)
  }
});


$('#section_1_view_more').on('click', function() {
    $('.section_1').find('.modal_more').addClass('active');
})

$('.btn_close_modal').on('click', function() {
    $('.modal_more').removeClass('active');
})
