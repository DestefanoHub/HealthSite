jQuery(function ($) {
    $(".hasSlideOut").on("click", function(){
        setTimeout(function(){
            $("div.slideout").slideDown("slow", function(){});
        }, 3000);
    });
});