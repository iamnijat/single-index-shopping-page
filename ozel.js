$(document).ready(function() {

    $("#aboutcompany").addClass("animated zoomIn");
    $("#privacy").addClass("animated zoomIn");
    $("#contact").addClass("animated zoomIn");

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop(); 



        if (scroll >= 30) {
            $("#namesurname").addClass("animated flash");
        }


        if (scroll <= 164) {
            $("#featured").addClass("animated pulse");
        }

        if (scroll >= 570) {
            $("#about").addClass("animated fadeInRight");
        }

        if (scroll >= 1070) {
            $("#lastest").addClass("animated slideInDown");
        }

        if (scroll >= 1646) {
            $("#categories").addClass("animated lightSpeedIn");
        }

        if (scroll >= 1646) {
            $("#categorydeck").addClass("animated shake");
        }

        if (scroll >= 2300) {
            $("#lets").addClass("animated zoomIn");
        }






    });

    $("body").on("click",".sils",function(){

        var chart_id=$(this).attr("id");

        var parent=$(this).parent("td").parent("tr");

        $.ajax({

                type:"post",
                url:"nedmin/netting/islem.php",
                data:{'chart_id':chart_id},
                success:function(silcevap){

             

                    parent.fadeOut('slow');

                }


            })

    });



    


});
