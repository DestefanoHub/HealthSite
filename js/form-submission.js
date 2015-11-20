/**
 * Created by andrew on 11/3/15.
 */
jQuery(function ($) {
    $("form").submit(function(event){
        event.preventDefault();
        var form = $("form").serializeArray();
        $.post("../php/form.php", {form: form},
            function(data){
                var html = [];
                $.each(data, function(key, value){
                    if(value.value == true){
                        html.push("<p class='correct'>" + value.name + "<br />" + value.answer + "<br /> </p>");
                    } else{
                        html.push("<p class='incorrect'>" + value.name + "<br /> Correct Answer: " + value.answer + "<br /> </p>");
                    }
                });
                $("div#result").html(html.join(""));
            });
    });
});
