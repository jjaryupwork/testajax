jQuery(document).ready(function(){
    $(document).on('click', 'button', function() {
        $(this).next("span").toggleClass("hidden");
    });
});

jQuery(document).ready(function($){
    $("a").click(function(event){
        link=$(this).attr("href");
        $.ajax({
            url: link
        })

            .done(function(html){

                $("#card").remove();
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


jQuery(document).ready(function($){
    $("a").click(function(event){
        link=$(this).attr("href");
        $.ajax({
            url: link
        })

            .done(function(html){

                $( ".card" ).remove();
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
