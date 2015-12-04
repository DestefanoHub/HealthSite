/**
 * Created by andrew on 11/3/15.
 */
jQuery(function ($) {
    $("form").submit(function(event){
        event.preventDefault();
        var form = $("form").serializeArray();
        $.post("../php/form.php", {form: form},
            function(data){
                console.log(data);
                $.each(data, function(key, value){
                    if(value.value == true){
                        $("div#"+value.name+" > p").css("color", "green");

                    } else{
                        $("div#"+value.name+" > p").css("color", "red");
                        $("div#"+value.name+" > label[title$='"+value.answer+"']").css("color", "green");
                    }
                });
            });
    });
});
