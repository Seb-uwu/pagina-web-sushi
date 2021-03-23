$(document).ready(function(){
    
    $("#inlineRadio1").click(function(){
        $("#cont-slide-2").css("display","none");
        $("#cont-slide-1").css("display","block");
    });
    $("#inlineRadio2").click(function(){
        $("#cont-slide-1").css("display","none");
        $("#cont-slide-2").css("display","block");
    });

    $("#cantidad").change(function(){
        
        var precio = parseFloat($("#precio").text());
        var cantidad = parseInt($("#cantidad").val());
        $("#resultado_producto").text(cantidad*precio);
    });
});
