var pegaValue
function escondeDiv() {
    $("#divFacil").hide();
    $("#divMedio").hide();
    $("#divDificil").hide();
  
  }
  
  $(document).ready(function () {
    $("#facil").click(function () {
      $("#divFacil").show();
      $("#divMedio").hide();
      $("#divDificil").hide();
      pegaValue=$("#facil");
      console.log(pegaValue.val())
    });
  });
  
  $(document).ready(function () {
    $("#medio").click(function () {
      $("#divFacil").hide();
      $("#divMedio").show();
      $("#divDificil").hide();
      pegaValue=$("#medio");
      console.log(pegaValue.val())
    });
  });
  
  $(document).ready(function () {
    $("#dificil").click(function () {
      $("#divFacil").hide();
      $("#divMedio").hide();
      $("#divDificil").show();
      pegaValue=$("#dificil");
      console.log(pegaValue.val())
    });
  });
  
var imgRandon = new Array() //array para armazenar todas as fotos geradas aleatoriamente
var temp = new Array() //array para guardar os id's das div's clicadas
var gravaSrc = new Array() // guarda src das div's clicadas
var guarda2clique = new Array() // guarda id das 2 ultimas fotos clicadas
var cont = 0 // conta todos os cliques valido
var x = 0 // conta os dois clique que o usuario deu
var idTemp = 0 // variavel que conta o indice das div' s novas que clico
var fim = 0 // variavel que conta se o jogo acabou

function embaralhar(array) {
  var indice_atual = array.length, valor_temporario, indice_aleatorio;

  while (0 !== indice_atual) {

    indice_aleatorio = Math.floor(Math.random() * indice_atual);
    indice_atual -= 1;

    valor_temporario = array[indice_atual];
    array[indice_atual] = array[indice_aleatorio];
    array[indice_aleatorio] = valor_temporario;
  }
  return array
}

var i = 2//indice apar a funcao de gerar img

function gera_imgs(quantidade) {

  if (i != 2) { //verifica se a funcao já foi gerada
    return
  }

  var numeroSorteado = Math.round(Math.random() * 8 + 1)
  imgRandon[0] = numeroSorteado
  imgRandon[1] = numeroSorteado


  while (i < quantidade) {
    var j = 0
    numeroSorteado = Math.round(Math.random() * 8 + 1)
    while (j < i) {
      if (numeroSorteado == imgRandon[j]) {
        numeroSorteado = Math.round(Math.random() * 8 + 1)
        j = 0
      }
      else {
        j++
      }
    }
    imgRandon[j] = numeroSorteado
    imgRandon[j + 1] = numeroSorteado
    i = i + 2

  }

  embaralhar(imgRandon)

}

function verifica_igual(cont) {
  if (guarda2clique[cont - 2].src != guarda2clique[cont - 1].src) {
    guarda2clique[cont - 1].setAttribute('src', 'img/imgFundoMelhor.jpg')
    guarda2clique[cont - 2].setAttribute('src', 'img/imgFundoMelhor.jpg')
    return
  }
  console.log('parabens')
  fim++
}

function verifica_id_clicado(div) {
  gera_imgs(pegaValue.val())
  for (var k = 0; k < temp.length; k++) {
    if (div.id == temp[k].id) { //verifica se este id ja foi clicado para atribuir a msm imagem

      if (div.id == guarda2clique[cont - 1].id && x != 0) {  // verifica se esta sendo clicado novamente
        console.log('div clicada dnv')
        console.log(idTemp)

        return
      }

      document.getElementById(div.id).setAttribute('src', gravaSrc[k])
      console.log("div repetida")
      guarda2clique[cont] = document.getElementById(div.id)
      cont++
      x++
      return
    }
  }
  console.log("div nova")
  document.getElementById(div.id).setAttribute('src', 'img/' + imgRandon[idTemp] + '.png')
  temp[idTemp] = document.getElementById(div.id)
  gravaSrc[idTemp] = div.src
  guarda2clique[cont] = document.getElementById(div.id)
  idTemp++
  cont++
  x++
}

function verifica_fim(){
  if (fim==pegaValue.val()/2){
    alert("Parabens!!! \n"+ "Você deu " + cont + " click' s")
    console.log("jogo acabou")
    window.location.reload()
  }
}

function insere_imagens(div) {

  while (x < 2) {

    verifica_id_clicado(div)
    return
  }
  verifica_igual(cont)
  verifica_fim()
  x = 0
}
