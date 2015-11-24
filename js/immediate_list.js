/**
slightly modified edu_list by Cina
*/

jQuery(function ($)
	{
		var $contentDiv = $("div#content");
		$("i_a-section").on("click", ".list-group-item", function ()
		{
			var pageName = $(this).attr("data-section") + "-immediate.html";
			$.get("../page-content/" + pageName, function (pageData)
			{
				$contentDiv.html(pageData);
			});
		});
	});
