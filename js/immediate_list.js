jQuery(function ($){
	var $contentDiv = $("div#content");
	$("#immediate-section").on("click", ".list-group-item", function () {
		var pageName = $(this).attr("data-section") + "-immediate.html";
		$.get("../page-content/" + pageName, function (pageData) {
			$contentDiv.html(pageData);
		});
	});
});