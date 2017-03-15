$(document).on('click', '.navbar-collapse.in', function(e){
           if($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle'){
               $(this).collapse('hide');
           } 
        });
        
$(window).on('load', function(){
    $(window).scroll(function(){
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $('.fader-image').each(function(){
            var objectBottom = $(this).offset().top + $(this).outerHeight()/1.8;
            
            //WHEN ELEMENT IS IN BOUNDS FADE IN
            if(objectBottom < windowBottom){
                //COMES INTO VIEW(SCROLLDOWN)
                if($(this).css('opacity')==0){
                    $(this).fadeTo(1100, 1);}
            } else {
                //OUT OF VIEW(SCROLL UP)
                if($(this).css('opacity')==1){
                    $(this).fadeTo(1100, 0);}
            }
        });
    }).scroll();//handler on page load
});









//        $(window).scroll(function(){
//            $('nav.navbar.navbar-fixed-top.navbar-inverse').addClass('scrolled');
//        });
        
//        $(function(){
//            $(window).scroll(function(){
//                var pageScroll = $(window).scrollTop();
//                if(pageScroll == 0){
//                    $('nav.navbar.navbar-fixed-top.navbar-inverse').removeClass('scrolled');
//                } else {
//                    $('nav.navbar.navbar-fixed-top.navbar-inverse').addClass('scrolled');
//                }
//            });
//        });