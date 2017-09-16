 $(document).on('click', 'button', function() {
            $(this).next("span").toggleClass("hidden");
        });
 $(document).on('click', 'a', function() {
        link=$(this).attr("href");
        $.ajax({
            url: link
        })
            .done(function(html){
                $(".label").remove();
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
