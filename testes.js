// JS PARA FAZER TESTES ALEATRIOS
var imgRandon = new Array()


function embaralhar(array) {
    var indice_atual = array.length, valor_temporario, indice_aleatorio;

    if(i!=2){ //verifica se a funcao já foi gerada
        return
      }

    while (0 !== indice_atual) {
  
      indice_aleatorio = Math.floor(Math.random() * indice_atual);
      indice_atual -= 1;
  
      valor_temporario = array[indice_atual];
      array[indice_atual] = array[indice_aleatorio];
      array[indice_aleatorio] = valor_temporario;
    }
    return array
  }

var i = 2
function gera_imgs(quantidade) {
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
  gera_imgs(16)



function teste2(div) {
    for (var k = 0; k < temp.length; k++) {
        if (div.id == temp[k].id) {
            console.log("div repetida")
            return
        }
    }
    console.log("div nova")
    console.log(idTemp)
    temp[idTemp] = document.getElementById(div.id)
    idTemp++
    return
}

function teste(div) {
    console.log(div.src)
}

function imprimeArray(array) {
    for (var k = 0; k < array.length; k++) {
        console.log(array[k])
    }
}
console.log(imprimeArray(imgRandon))


//console.log(imgRandon.length)


