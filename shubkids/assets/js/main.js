
$(document).ready(function () {
    $("#iTab02").addClass("hidden");
    $("#iTab03").addClass("hidden");
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
        loop:false,
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
                items:3
            }
        }
    })

    $(".navbar-toggle" ).click(function() {
        $('body').toggleClass('blockp');
    });

    $("#ourproject .item").click(function () {
        var sValue = $(this).data("value");
        switch (sValue) {
            case "Samsung": { showTabProjects(true, true, true, false, false); }; break;
            case "QueMinhNgayMoi": { showTabProjects(false, false, false, true, false); }; break;
            case "GhiBi": { showTabProjects(false, false, false, false, true); }; break;
        }
        $("body, html").animate({scrollTop: $('.section-6').offset().top}, 600);
    });
});

function showTabProjects(it1, it2, it3, it4, it5) {
    if (it1 == true) { $("#iTab01-1").removeClass("hidden"); $("#iTab01-1 a").click(); }
    else { $("#iTab01-1").addClass("hidden"); }
    if (it2 == true) { $("#iTab01-2").removeClass("hidden"); }
    else { $("#iTab01-2").addClass("hidden"); }
    if (it3 == true) { $("#iTab01-3").removeClass("hidden"); }
    else { $("#iTab01-3").addClass("hidden"); }
    if (it4 == true) { $("#iTab02").removeClass("hidden"); $("#iTab02 a").click(); $("#iTab02").addClass("without-before-element"); }
    else { $("#iTab02").addClass("hidden"); }
    if (it5 == true) { $("#iTab03").removeClass("hidden"); $("#iTab03 a").click(); $("#iTab03").addClass("without-before-element"); }
    else { $("#iTab03").addClass("hidden"); }
}
