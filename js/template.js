/**
 * Created by andrew on 11/11/15.
 */
$(document).ready(function(){
    $.get("../page-content/edu_list.php", function(pageData){
        $("div#content").html(pageData);
        $.getScript('../js/edu_list.js');
    });
});