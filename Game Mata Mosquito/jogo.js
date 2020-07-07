

// precisamos definir a dimensão do palco do jogo, através destas ferramentas abaixo conseguiremos extrair as informações necessárias 
// caso o usuario redimensione a pagina as informações não são atualizadas, isso porque elas foram recuperadas em 1 unico ponto do processamento, porém é importante que toda vez que ocorrer o redimensionamento, para fazer isso colocamos dentro de uma função. 

var largura
var altura
var larguraDoMosquito = 90
var alturaDoMosquito = 90

function ajustaTamanhoPalcoJogo(){  // Precisamos relacionar esta chamada ao evento onresize do body
largura = window.innerWidth
altura = window.innerHeight
console.log(largura, altura) 
}

ajustaTamanhoPalcoJogo()

// criação de método randomico para ser utilizado na aleatoriedade de posicionamento do mosquito
var posicaoX = Math.floor(Math.random()*largura) - larguraDoMosquito // Math.floor arredondando para baixo, Math.random gerando valores aleatorios de 0 a 1 * largura atual = número aleatorio que irá de 0 até a limite da minha tela
var posicaoY = Math.floor(Math.random()*altura) - alturaDoMosquito
console.log(posicaoX, posicaoY)

posicaoX = posicaoX < 0 ? 0 : posicaoX  // Operador ternário para verificar se as posições são menores que 0. Caso seja, o valor será 0, se não, recebe o valor dele mesmo. Isso corrige um problema do valor ficar negativo por conta da subtração com largura/altura que fizemos para não extrapolar da tela 
posicaoY = posicaoY < 0 ? 0 : posicaoY 
console.log(posicaoX, posicaoY)

// criar o elemento HTML
var mosquito = document.createElement('img')     // similar a colocar diretamente no HTML, porém aqui é feito de forma programatica
mosquito.src = 'imagens/mosquito.png'
mosquito.className = 'mosquito1' // Atribuir a classe ao elemento
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'

document.body.appendChild(mosquito) // Adicionar um filho ao body