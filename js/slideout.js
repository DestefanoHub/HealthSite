jQuery(function ($) {
    $(".hasSlideOut").on("click", function(){
        setTimeout(function(){
            $("button.slideout_button").slideDown("slow", function(){});
        }, 3000);
    });

    $("button.slideout_button").on("click", function(){
        var pageName = $(this).attr("id") + "_extra.html";
        var sectionName = $(this).attr("id") + "_extra";
        var divSection = $("div[id='"+ sectionName +"']");
        console.log(divSection);
        $.get("../page-content/" + pageName, function (pageData) {
            console.log(pageData);
            divSection.html(pageData);
            divSection.css("display", "block");
        });
    });
});