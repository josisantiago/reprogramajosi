//No arquivo page2.html, faça uma instrução jQuery que selecione o input text pelo atributo, depois navegue até seu elemento pai e adicione a classe "alert alert-info" nele.
$(function() {
    
    $('input[type="text"]').parent().addClass('alert alert-info');


//No arquivo page2.html, faça uma instrução jQuery que selecione o item da lista e:
//Adicione a classe "list-group-item-info" nenhum item.
//Adicione a classe "list-group-item-dark" nos demais itens.


    $(".list-group-item").click(function() {
        $(this).removeClass("list-group-item-dark").addClass("list-group-item-info");
        $(this).siblings().removeClass("list-group-item-info").addClass("list-group-item-dark");
    })  



});
