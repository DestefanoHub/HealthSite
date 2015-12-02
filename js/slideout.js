jQuery(function ($) {
    $(".hasSlideOut").on("click", function(){
        setTimeout(function(){
            $("div.slideout").slideToggle("slow", function(){});
        }, 3000);
    });
});