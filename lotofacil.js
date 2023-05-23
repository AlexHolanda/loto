var span = document.getElementsByClassName('numeros')
var sorteados = [];
var resposta = document.getElementById('resposta')

var arr = [];

var resPar = document.getElementById('resPar')
var resImpar = document.getElementById('resImpar')



var par = [];
var impar = [];
var arInputFixos = [];

    var lista1 = [];
    var lista2 = [];
    var lista3 = [];
    var lista4 = [];
    var lista5 = [];
    var lista6 = [];
    var lista7 = [];
    var lista8 = [];

function sorteio(a, b) {
    return Math.floor(Math.random() * (a - b) + b);
}

function gerar() {
    var contaPar = 0;
    var contaImpar = 0;
    if (numero1.value != '') {
        arInputFixos.push(Number(numero1.value))
    }
    if (numero2.value != '') {
        arInputFixos.push(Number(numero2.value))
    }
    if (numero3.value != '') {
        arInputFixos.push(Number(numero3.value))
    }
    if (numero4.value != '') {
        arInputFixos.push(Number(numero4.value))
    }
    if (numero5.value != '') {
        arInputFixos.push(Number(numero5.value))
    }

    // arr.push(arInputFixos.splice(', '))

    while (sorteados.length <= 14) {
        var resultado = sorteio(1, 26);

        if (!sorteados.includes(resultado)) {
            if (sorteados.length <= 14) {
                sorteados.push(resultado);

                if ((resultado % 2) == 0) {
                    par.push(resultado);
                    contaPar++
                } else {
                    impar.push(resultado);
                    contaImpar++
                }
            }
        }

        for (let i = 0; i < span.length; i++) {
            for (var j = 0; j < span.length; j++) {
                if (span[i].innerHTML == sorteados[j]) {
                    span[i].style.backgroundColor = "#9f0567"
                    span[i].style.color = "#FFF"
                }
            }
        }

    }
    // Gera com os números Fixos
    while (arInputFixos.length <= 14) {
        var resultadoFixo = sorteio(1, 26);
        if (!arInputFixos.includes(resultadoFixo)) {
            if (arInputFixos.length <= 14) {
                arInputFixos.push(resultadoFixo);
            }
        }
    }
    sorteados.sort((a, b) => {
        if (a < b) return -1

    });
    par.sort((a, b) => {
        if (a < b) return -1

    });
    impar.sort((a, b) => {
        if (a < b) return -1

    });
    arInputFixos.sort((a, b) => {
        if (a < b) return -1

    });

    


    resposta.innerHTML = `${sorteados}`
    resPar.innerHTML = `(${contaPar}) - ${par}`
    resImpar.innerHTML = `(${contaImpar}) - ${impar}`
    resFixos.innerHTML = `${arInputFixos}`


    console.log(sorteados)
    console.log(contaImpar);
    console.log(contaPar);
    console.log(arr);
    console.log(arInputFixos);

    GerarLista();

    nlista1.innerHTML = `Jogo 1: ${lista1}`;
    nlista2.innerHTML = `Jogo 2: ${lista2}`;
    nlista3.innerHTML = `Jogo 3: ${lista3}`;
    nlista4.innerHTML = `Jogo 4: ${lista4}`;
    nlista5.innerHTML = `Jogo 5: ${lista5}`;
    nlista6.innerHTML = `Jogo 6: ${lista6}`;
    nlista7.innerHTML = `Jogo 7: ${lista7}`;
    nlista8.innerHTML = `Jogo 8: ${lista8}`;
    
}



function limparNumeros() {
    sorteados.length = 0
    resultado = "";
    sorteio.length = 0
    resposta.innerHTML = ""
    par.length = 0
    impar.length = 0
    resPar.innerHTML = ""
    resImpar.innerHTML = ""
    arInputFixos.length = 0
    resFixos.innerHTML = ""
    numero1.value = ""
    numero2.value = ""
    numero3.value = ""
    numero4.value = ""
    numero5.value = ""
    nlista1.innerHTML = "";
    nlista2.innerHTML = "";
    nlista3.innerHTML = "";
    nlista4.innerHTML = "";
    nlista5.innerHTML = "";
    nlista6.innerHTML = "";
    nlista7.innerHTML = "";
    nlista8.innerHTML = "";
    lista1.length = 0;
    lista2.length = 0;
    lista3.length = 0;
    lista4.length = 0;
    lista5.length = 0;
    lista6.length = 0;
    lista7.length = 0;
    lista8.length = 0;

    for (var j = 0; j < span.length; j++) {

        span[j].style.backgroundColor = "#FFF"
        span[j].style.color = "#000"

    }

}

function GerarLista() {
    

    var lLista

    for (var x = 1; x < 9; x++) {
        if(lista1.length <=14){
            lLista = lista1;
        } else if (lista2.length <= 14){
            lLista = lista2;
        } else if (lista3.length <= 14){
            lLista = lista3;
        } else if (lista4.length <= 14){
            lLista = lista4;
        } else if (lista5.length <= 14){
            lLista = lista5;
        } else if (lista6.length <= 14){
            lLista = lista6;
        } else if (lista7.length <= 14){
            lLista = lista7;
        } else if (lista8.length <= 14){
            lLista = lista8;
        }
        
        while (lLista.length <= 14) {
            var resultado = sorteio(1, 26);

            if (!lLista.includes(resultado)) {
                if (lLista.length <= 14) {
                    lLista.push(resultado);
                }
            }

        }
    }

    lista1.sort((a, b) => {
        if (a < b) return -1

    });

    lista2.sort((a, b) => {
        if (a < b) return -1

    });

    lista3.sort((a, b) => {
        if (a < b) return -1

    });

    lista4.sort((a, b) => {
        if (a < b) return -1

    });

    lista5.sort((a, b) => {
        if (a < b) return -1

    });

    lista6.sort((a, b) => {
        if (a < b) return -1

    });

    lista7.sort((a, b) => {
        if (a < b) return -1

    });

    lista8.sort((a, b) => {
        if (a < b) return -1

    });

    

    console.log(`Essa é a lista1 ${lista1}`);
    console.log(`Essa é a lista2 ${lista2}`);
    console.log(`Essa é a lista3 ${lista3}`);
    console.log(`Essa é a lista4 ${lista4}`);
    console.log(`Essa é a lista5 ${lista5}`);
}
