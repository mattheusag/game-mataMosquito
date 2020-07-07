

// precisamos definir a dimensão do palco do jogo, através destas ferramentas abaixo conseguiremos extrair as informações necessárias 
// caso o usuario redimensione a pagina as informações não são atualizadas, isso porque elas foram recuperadas em 1 unico ponto do processamento, porém é importante que toda vez que ocorrer o redimensionamento, para fazer isso colocamos dentro de uma função. 

var largura
var altura
var larguraDoMosquito = 90
var alturaDoMosquito = 90
var vidas = 1
var tempo = 10

function ajustaTamanhoPalcoJogo(){  // Precisamos relacionar esta chamada ao evento onresize do body
  largura = window.innerWidth
  altura = window.innerHeight
  console.log(largura, altura) 
}

ajustaTamanhoPalcoJogo()

// CRONOMETRO 

  var cronometro = setInterval(function(){
    tempo --

    if(tempo == 0){
      window.location.href = 'vitoria.html'
    } else{
    document.getElementById('cronometro').innerHTML = tempo 
  }
  },1000)

  function posicaoRandomica(){

    // remover o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')){ // Para saber se existe basta realizar este teste, caso tenha, o If retornará true e portanto o JS executará o if, removendo-o. Se não, retornará null e o JS ignorará o if
      document.getElementById('mosquito').remove()

      if (vidas > 3){
        window.location.href = 'fim_de_jogo.html'

      } else document.getElementById('v' + vidas).src="imagens/coracao_vazio.png" // modificando a origem da imagem do elemento HTML
      vidas++

  }



    // criação de método randomico para ser utilizado na aleatoriedade de posicionamento do mosquito
    var posicaoX = Math.floor(Math.random()*largura) - larguraDoMosquito // Math.floor arredondando para baixo, Math.random gerando valores aleatorios de 0 a 1 * largura atual = número aleatorio que irá de 0 até a limite da minha tela
    var posicaoY = Math.floor(Math.random()*altura) - alturaDoMosquito

    posicaoX = posicaoX < 0 ? 0 : posicaoX  // Operador ternário para verificar se as posições são menores que 0. Caso seja, o valor será 0, se não, recebe o valor dele mesmo. Isso corrige um problema do valor ficar negativo por conta da subtração com largura/altura que fizemos para não extrapolar da tela 
    posicaoY = posicaoY < 0 ? 0 : posicaoY 
    console.log(posicaoX, posicaoY)

    // criar o elemento HTML
    var mosquito = document.createElement('img')     // similar a colocar diretamente no HTML, porém aqui é feito de forma programatica
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' +  ladoAleatorio() // Atribuir a classe ao elemento, nesse caso de concatenação, lembrar de dar um espaço entre as strings e ai sim são 2 classes separadas
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
      this.remove()
    }

    document.body.appendChild(mosquito) // Adicionar um filho ao body
}

// Para criarmos tamanhos diferentes e aleatorios de mosquitos, criaremos esta função:
function tamanhoAleatorio(){
  var classe = Math.floor(Math.random() * 3) // Irá gerar valores aleatorios entre 0 e 2

  switch (classe){
    case 0:
      return 'mosquito1' // quando o interpretador do JS identifica o comando return, ele retorna o dado para quem fez a chamada da função, interrompendo o processamento da função naquele ponto, então como em cada um dos cases estamos dando return, não é necessario o break posteriormente.
      

    case 1:
      return 'mosquito2'
      

    case 2:
      return 'mosquito3'
      
  }
}

function ladoAleatorio(){
  var classe = Math.floor(Math.random() * 2) // Irá gerar valores aleatorios entre 0 e 1

  switch (classe){
    case 0:
      return 'ladoA'
      
    case 1:
      return 'ladoB'
      
  }
}