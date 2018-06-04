
$( document ).ready(function() {
  $(".isDesktop .sticky").sticky({ topSpacing: 0 });

 $(".isMobile .p-header .nav>li>a").on("click", function(){
     $(".navbar-toggle" ).click();
 });

 
  if($('html').hasClass('isDesktop')){
    new WOW().init();
  };
    $('.slide-01').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    $('.slide-02').owlCarousel({
        loop:true,
        margin:16,
        nav:true,
        responsive:{
            0:{
                items:2,
                margin: 20,
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    $(".navbar-toggle" ).click(function() {
        $('body').toggleClass('blockp');
    });
});
