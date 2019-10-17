// No arquivo page1.html, faça uma instrução jQuery que selecione todos elementos img da página que possuem alt e os imprima no log do console.
$(document).ready(function(){
    console.log($("img").filter("[alt]"));
})