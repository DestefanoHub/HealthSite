jQuery(function ($) {
    var $contentDiv = $("div#content");
    $("#edu-section").on("click", ".list-group-item", function () {
        var pageName = $(this).attr("data-section") + ".html";
        $.get("../page-content/" + pageName, function (pageData) {
            $contentDiv.html(pageData);
            $.getScript("../js/slideout.js");
        });
    });
});