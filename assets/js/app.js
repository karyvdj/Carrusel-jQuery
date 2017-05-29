// $(document).ready(function() {
//   alert("soy jQuery");
// });

$(document).ready(function (){
    $(".img").hide();
    $("#img1").show();
    $(".boton").css("background-color", "#E9ACD9");
})
$("#btn1").click(function(){
    $(".img").hide();
    $("#img1").show();
    $(".boton").css("background-color", "#E9ACD9");
    $("#btn1").css("background-color", "#C572AF");
});

$("#btn2").click(function(){
    $(".img").hide();
    $("#img2").show();
    $(".boton").css("background-color", "#E9ACD9");
    $("#btn2").css("background-color", "#C572AF");
});

$("#btn3").click(function(){
    $(".img").hide();
    $("#img3").show();
    $(".boton").css("background-color", "#E9ACD9");
    $("#btn3").css("background-color", "#C572AF");
});

$("#btn4").click(function(){
    $(".img").hide();
    $("#img4").show();
    $(".boton").css("background-color", "#E9ACD9");
    $("#btn4").css("background-color", "#C572AF");
});

$("#btn5").click(function(){
    $(".img").hide();
    $("#img5").show();
    $(".boton").css("background-color", "#E9ACD9");
    $("#btn5").css("background-color", "#C572AF");
});

// $(document).ready(function(){
//   $('#carrusel div:gt(0)').hide(); //gt(0) seleccina todo los div a partir del numero 0
//     setInterval(function(){
//     $('#carrusel div:first-child').fadeOut(0)
//          .next('div').fadeIn(1000)
//          .end().appendTo('#carrusel');}, 3000);
// });
