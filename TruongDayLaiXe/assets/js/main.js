$(document).ready(function() {
    $('.slider').bxSlider({
        auto: true,
    });
});


$(document).ready(function() {

    $('.isDesktop  .section__title, .isDesktop  .section-1 .item, .isDesktop  .section__title_2, .isDesktop  .section__desc, .isDesktop  .button, .isDesktop  .list02 .item, .isDesktop  .list01 .item, .isDesktop .title_page').addClass('wow fadeInUp');

    $('.isDesktop  .img-intro, .isDesktop .list03 .item').addClass('wow fadeInLeft');
    $('.isDesktop .list04 .item,.isDesktop .list04 .h3').addClass('wow fadeInRight');

    $('.bxslider').bxSlider({
        auto: true,
        autoControls: true,
        pager: true,
    });

    if ($('html').hasClass('isDesktop')) {
        new WOW().init();
    };

});
