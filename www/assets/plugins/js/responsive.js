function getdevice() {
    var md = new MobileDetect(window.navigator.userAgent);
    var myhtml = document.getElementsByTagName("html");
    //Desktop
    if (md.phone() === null && md.tablet() === null) {
        //$('html').addClass('desktop').removeClass('mobile').removeClass('tablet').removeClass('phone');
        myhtml[0].classList.add("isDesktop");
        myhtml[0].classList.remove("isMobile");
        myhtml[0].classList.remove("isTablet");
        myhtml[0].classList.remove("isPhone");
    }
    //Mobile
    else {
        //$('html').addClass('mobile').removeClass('desktop');
        myhtml[0].classList.add("isMobile");
        myhtml[0].classList.remove("isDesktop");
        if (md.phone()){
            //$('html').addClass('phone').removeClass('tablet');
            myhtml[0].classList.add("isPhone");
            myhtml[0].classList.remove("isTablet");
        }

        else{
            //$('html').addClass('tablet').removeClass('phone');
            myhtml[0].classList.add("isTablet");
            myhtml[0].classList.remove("isPhone");
        }

    }

    //browser
    var ua = navigator.userAgent.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
    var browser = '';
    if (navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/Trident.*rv[ :]*11\./i)) {
        browser = "msie";
    }
    else {
        browser = ua[1].toLowerCase();
        if (browser === 'safari')
        {
            //$('html').addClass('safari');
            myhtml[0].classList.add("safari");
        }

        else{
            //$('html').removeClass('safari');
            myhtml[0].classList.remove("safari");
        }
    }
}

document.addEventListener("DOMContentLoaded", getdevice);
window.addEventListener("resize", getdevice); 
