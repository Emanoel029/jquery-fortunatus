//Slid carousel

$(document).ready(function () {
  $("#carousel-imagens").slick({
    autoplay:true,
  });

  //Efeito abrir e fechar menu hamburguer
  $(".menu-hamburguer").click(function (){
    $("nav").slideToggle();
  });

  //Formulário
  $("#telefone").mask("(00) 00000-0000");

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
      },
      telefone: {
        required: true,
      },
      mensagem: {
        required: true,
      },
      veiculoDeInteresse: {
        required: false,
      },
    },
    messages: {
      nome: '<h3 class = "validate"> Por favor, insira o seu nome completo</h3>',
      email: '<h3 class = "validate"> Por favor, insira o seu e-mail</h3>',
      telefone: '<h3 class = "validate"> Por favor, insira o seu telefone</h3>',
      mensagem: '<h3 class = "validate"> Por favor, insira uma mensagem</h3>',
    },
    submitHandler: function (form) {
      console.log(form);
    },
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();

    },
  });
  //Quando o usuario clicar no botão "tenho interesse" rola para o form
  $(".lista-veiculos button").click(function () {
    const destino = $("#contato");

    const nomeVeiculo = $(this).parent().find("h3").text();

    $("#veiculo-interesse").val(nomeVeiculo);

    $("html").animate(
      {
        scrollTop: destino.offset().top,
      },
      1000
    );
  });
});
