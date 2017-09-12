var link;
var current;

jQuery(document).ready(function($){
    $("a").click(function(event) {
        $( ".current" ).removeClass();
        $(this).addClass('current');
    });
});

jQuery(document).ready(function($){
    $("a").click(function(event){
        link=$(this).attr("href");
        $.ajax({
            url: link
        })

            .done(function(html){

                $( "#divAbout" ).remove();
                $("#page").empty().append(html);

            })
            .fail(function(){
                console.log("error");

            })
            .always(function(){
                console.log("complete");
            });

        return false;

    });
});