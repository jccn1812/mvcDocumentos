$(document).ready(function () {

    $("#buscador").hide();

    $("#btnBuscar").click(function(){

        if ($("#buscador").is(":visible")) {
            $("#buscador").fadeOut();
           
        } else {
            $("#txtSearch").val("");
            $("#buscador").fadeIn();       
        }


    })




})