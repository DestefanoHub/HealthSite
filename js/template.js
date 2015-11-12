/**
 * Created by andrew on 11/11/15.
 */
$(document).ready(function(){
    //Nav buttons click action
    $("button#aid-kit").click(function(){
        location.assign("../html/kit.html");
    });
    $("button#help").click(function(){
        location.assign("#");
    });
    $("button#info").click(function(){
        location.assign("../html/template.html");
    });
    $("button#911").click(function(){
        location.assign("#");
    });

    $.get("../page-content/edu_list.php", function(pageData){
        $("div#content").empty();
        $("div#content").append(pageData);
    });
});