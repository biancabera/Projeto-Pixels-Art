//                                                      REQUISITO 7
//  declaro uma constante chamada color e ela aglomera todas as classes color
 const color = document.querySelectorAll('.color')
//  criei uma estrutura de repetição para percorrer os elementos desta nodeList de classes color
 for (let index = 0; index < color.length; index += 1)
//  e com isso adicionei um escutador de evento do tipo que ao CLICAR, ele EXECUTA a função que irei criar chamada click para cada indice da classe color, 
 color[index].addEventListener('click', click)
// Criando a função com o nome click que é executada quando recebe um EVENTO 
 function click (event) { 
// Crio uma constante que acessa o PRIMEIRO e único elemento que possui a classe SELECTED. 
    const selected = document.querySelector('.selected')
//Ao receber o clique e executar a função, essa constante acima tem a sua classe SELECTED removida. 
    selected.classList.remove('selected')
// Ao receber o clique e executar a função, a classe SELECTED será adicionada ao indice da classe COLOR em que foi clicado.
    event.target.classList.add('selected')
 }
//                                                      REQUISITO 8
// Declaro uma constante chamada pixel, que aglomera todos da classe pixel
 const pixel = document.querySelectorAll('.pixel');
// Crio uma estrutura de repetição para percorrer os elementos desta nodeList da classe pixel
 for (let index2 = 0; index2 < pixel.length; index2 += 1) { 
// Adiciono um escutador de evento do tipo CLICK, para executar a função que criarei chamada pintaPixel para todos da classe pixel AO CLICAR
    pixel[index2].addEventListener('click', pintaPixel)
} 
// Criando uma função com o nome pintaPixel que é executada quando recebe um evento
 function pintaPixel (event) { 
// Criando uma constante que acessa o primeiro e único elemento da classe SELECTED
    const selectedPalett = document.querySelector('.selected') 
// Criando uma constante que importa a propriedade backgroundColor do CSS para a própria constante, utilizando a função window.getComputedStyle e getPropertyValue, pesquisando como importar propriedade CSS para Javascript e utilizei essa referência para o código https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
    const colorSelected = window.getComputedStyle(selectedPalett, null).getPropertyValue('background-color')
// Ao receber o CLIQUE e EXECUTAR a função, a cor IMPORTADA da classe SELECTED passa a fazer parte do backgroundColor do pixel clicado(função pintaPixel). 
    event.target.style.backgroundColor = colorSelected
}
//                                                      REQUISITO 9
// Acesso a minha ID clear-board criando uma constante chamada clearBoard para pode trabalhar adicionando uma função a ela
 const clearBoard = document.getElementById('clear-board')
//  adiciono um escutador de evento à essa constante quando ao clicar nela, executará minha função a seguir (limparBotao)
 clearBoard.addEventListener('click', clearBoards)
// mais uma vez, crio uma constante acessando meus blocos cuja classe é pixel para trabalhar com minha estrutura de repetição nela
 const quadrosBrancos = document.querySelectorAll('.pixel')
// aqui começo minha função que vai executar a limpeza dos blocos que foram pintados
    function clearBoards() { 
//  crio minha estrutura de repetição acessando do primeiro índice até o último dos meus blocos cuja classe é (.pixel)
 for (let index3 = 0; index3 < quadrosBrancos.length; index3 += 1){ 
// ao determinar a estrutura, finalizo o código por acessar todos meus blocos(.pixel), da primeira até o último elemento da mesma, e com isso adiciono um style com o tipo da cor de fundo sendo ela WHITE, para fazer um tipo de RESET para as cores que foram pintadas
 quadrosBrancos[index3].style.backgroundColor = 'white'}
    }
// foi difícil até aqui mas consegui!

// Requisito 12

function randomColor(){
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
    }
    function renovandoCores(){
    document.getElementById('petali').style.backgroundColor = randomColor();
    document.getElementById('adore').style.backgroundColor = randomColor();
    document.getElementById('red').style.backgroundColor = randomColor();
    }
 window.onload = renovandoCores;

