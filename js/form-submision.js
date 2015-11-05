/**
 * Created by andrew on 11/3/15.
 */
$(document).ready(function(){
    $("form").submit(function(event){
        event.preventDefault();
        var form = $("form").serializeArray();
        $.post("../php/form.php", {form: form},
            function(data){
                $.each(data, function(key, value){
                    //var answerText = $("div#"+value.name > "label").text();
                    if(value.value == true){
                        var html = "<p class='correct'>" + value.name + "<br />" + value.answer + "<br /> </p>";
                    } else{
                        var html = "<p class='incorrect'>" + value.name + "<br /> Correct Answer: " + value.answer + "<br /> </p>";
                    }
                    $("div#result").append(html);
                });
            });
    });
});
