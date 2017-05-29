// $(document).ready(function() {
//   alert("soy jQuery");
// });

$(document).ready(function(){
  $('#carrusel div:gt(0)').hide(); //gt(0) seleccina todo los div a partir del numero 0
    setInterval(function(){
    $('#carrusel div:first-child').fadeOut(0)
         .next('div').fadeIn(1000)
         .end().appendTo('#carrusel');}, 3000);
});
