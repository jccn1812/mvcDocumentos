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

    /*     Treeview     */

    var myTree = [
    {
        text: "Item 1",
        nodes: [
          {
              text: "Item 1-1",
              nodes: [
                {
                    text: "Item 1-1-1"
                },
                {
                    text: "Item 1-1-2"
                }
              ]
          },
          {
              text: "Item 1-2"
          }
        ]
    },
    {
        text: "Item 2"
    },
    {
        text: "Item 3"
    }
    
];


    $('#default-tree').treeview({
        data: myTree
    });

})