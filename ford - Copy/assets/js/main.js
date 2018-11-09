$('.gallery-home').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
      navText: '',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.slide_sp_home').owlCarousel({
    loop:false,
    margin:0,
    nav:true,
    navText: '',
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
// $(".dropdown_sp").on('mouseover', function () {
//   $(this).addClass("open")
// })
//
// $("#dropdown_menu_sanpham").on("mouseleave",function () {
//   $(".dropdown_sp").removeClass("open")
// })

$(".chk_color_box .list-color li span").on('click', function () {
  var inner = $(this).closest('.chk_color_box');
    if (inner != undefined){
      var cl = $(this).data("cl");
      var image = $(this).data("img");
      $(inner).find(".txt-color").text(cl);
      $(inner).find(".img_box img").attr("src", image);
   }
})
