var carta1 = {
  nome: "Onze",
  imagem: "https://jpimg.com.br/uploads/2018/01/millie-bobby-brown.jpg",
  atributos: {
    ataque: 3,
    defesa: 8,
    magia: 10
  }
};

var carta2 = {
  nome: "Mike",
  imagem:
    "https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/50/1513348683-1.jpg",
  atributos: {
    ataque: 8,
    defesa: 5,
    magia: 2
  }
};

var carta3 = {
  nome: "Will",
  imagem:
    "https://cabanadoleitor.com.br/wp-content/uploads/2020/01/will-560x600.png",
  atributos: {
    ataque: 4,
    defesa: 6,
    magia: 8
  }
};

var carta4 = {
  nome: "Dustin",
  imagem:
    "https://seriandoclub.com.br/wp-content/uploads/2020/05/stranger-things-gaten-matarazzo-minhaseriefavorita-1280x720-1-1024x683.jpg",
  atributos: {
    ataque: 6,
    defesa: 9,
    magia: 1
  }
};

var carta5 = {
  nome: "Lucas",
  imagem: "https://img.ecartelera.com/noticias/65700/65766-m.jpg",
  atributos: {
    ataque: 9,
    defesa: 7,
    magia: 1
  }
};

var cartas = [carta1, carta2, carta3, carta4, carta5];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 5);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 5);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 5);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  var divResultado = document.getElementById("resultado");

  if (valorCartaJogador > valorCartaMaquina) {
    htmlResultado = "<p class='resultado-final'>Venceu</p>";
  } else if (valorCartaJogador < valorCartaMaquina) {
    htmlResultado = "<p class='resultado-final'>Perdeu</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }
  console.log(cartaMaquina);
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; heigth: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class='carta-subtitle'>${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; heigth: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class='carta-subtitle'>${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}