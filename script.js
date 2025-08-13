const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
const texto = document.querySelector('#entrada-de-texto').value;
const campoResultado =doment.querySeletor ('#resultado-palvrachave');
const palavrasChave = prossaTexto(texto);


campoResultado.textoContent = palavrasChave. join (", ");
}

function processaTexto (texto){
 let palvras = texto. split(/\P{L}+/u);
 contraFrequencias(palavras) {
 Let frequencias = {};
 For (Let i of palavras);
   frequencias [i] = 0;
    for (let j of palavras) {
        if (i == j) {
            frequencias [i] ++;
        }
    }
 }
    
console.log(frequencias);
    return palavras;
}

function contraFrequencia(Palavras){
    
}

    
    
