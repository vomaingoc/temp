$(document).ready(function() {
    $('.slider').bxSlider({
        auto: true,
    });
});


$(document).ready(function() {

    $('.isDesktop  .section__title, .isDesktop  .section-1 .item, .isDesktop  .section__title_2, .isDesktop  .section__desc, .isDesktop  .button, .isDesktop  .list02 .item, .isDesktop  .list01 .item').addClass('wow fadeInUp');

    $('.isDesktop  .img-intro').addClass('wow fadeInLeft');

    $('.bxslider').bxSlider({
        auto: true,
        autoControls: true,
        pager: true,
    });

    if ($('html').hasClass('isDesktop')) {
        new WOW().init();
    };

});
