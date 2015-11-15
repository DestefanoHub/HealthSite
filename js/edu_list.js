/**
 * Created by andrew on 11/15/15.
 */
jQuery(function ($) {
    var $contentDiv = $("div#content");
    $("#edu-section").on("click", ".list-group-item", function () {
        var directoryName = $(this).attr("data-section");
        var pageName = directoryName + ".php";
        $.get("../page-content/" + directoryName + "/" + pageName, function (pageData) {
            $contentDiv.html(pageData);
        });
    });
});