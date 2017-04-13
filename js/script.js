/* ==== CLOSES THE NAVBAR WHEN AN ITEM IS CLICKED ==== */
$(document).on('click', '.navbar-collapse.in', function(e){
           if($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle'){
               $(this).collapse('hide');
           } 
        });
        
/* ==== FADES THE IMAGE OPACITY FROM 0 - 1 IN 1.1 SEC WHEN SCROLLED ==== */
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

/* ==== RESIZES PROJ/NEIGH DESCRIPTION DIV TO HEIGHT OF IMAGE FOR FLEXBOX PURPOSES ==== */
/* ==== FIXME: Runs on window resize from small to large but not large to small? ==== */

function flexboxApply(){
    var windowSize = $(window).width();
    if (windowSize >= 992){
        $('.projects').each(function(){
            $('.v-center-100').css({'height':($('.projects').height()+'px')});
        });
    }
}

// ==== RUNS THE FLEXBOXAPPLY FUNCTION WHEN ALL OF THE DOM ELEMENTS ARE LOADED
$(window).on('load', function(){
   flexboxApply(); 
});

$(window).resize(function(){
    flexboxApply();
});







/* ==== FADES IN/OUT NAVBAR COLOR BY APPLYING/REMOVING CLASS ON SCROLL ==== */
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