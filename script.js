document.addEventListener('DOMcontentLoaded', function(){
const aumentaFonteBotao = document.getElementByid('aumentar-fonte');
const diminuiFonteBotao = document.getElementByid('diminuir-fonte');
let tamanhoAtualFonte = 1;

aumentaFonteBotao.addEventListener('click', function(){
    tamanhoAtualFonte + = 0.1;
    document.body.style.fontSize = '${tamanhoAtualFonte}rem'


})

diminuiFonteBotao.addEventListener('click', function(){
    tamanhoAtualFonte -= 0.1;
    document.body.style.fontSize = '${tamanhoAtualFonte}rem'

})

})