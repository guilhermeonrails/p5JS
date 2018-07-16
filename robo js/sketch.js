let fundo
let robo
let balao
let resposta
let numeroPergunta = 0
let nome = ""
let respostaTexto

function preload() {
  fundo = loadImage("fundo.png")
  robo = loadImage("robo.png")
  balao = loadImage("balao.png")
}

function setup() {
  createCanvas(600, 400)
  noLoop()
  resposta = createInput();
}

function draw() {
  background(fundo)
  image(robo, 150, 200, 150, 150)
  image(balao, 80, 10, 300, 200)
  textSize(15)
  textAlign(CENTER)
  textStyle(BOLD)
  text(`Seja bem vindo ao Alura Genius!
Para adivinhar seu nome, responda
minhas perguntas com frases 
longas.
Clique na tela para começar`, 223, 50)
}

function mousePressed() {
  if (numeroPergunta == 0) {
    numeroPergunta++
    perguntar()
    console.log('já clicou')
    console.log(numeroPergunta)
  }

}

function desenharCena(texto){
 background(fundo)
  image(robo, 150, 200, 150, 150)
  image(balao, 80, 10, 300, 200)
  textSize(30)
  textAlign(CENTER)
  textStyle(BOLD)
  text(texto, 223, 70)
  resposta.size(400, 20)
  resposta.position(50, 360)
  resposta.elt.placeholder = ('RESPONDA AQUI E PRESSIONE ENTER')
  resposta.value('')
}

function perguntar() {
 	if (numeroPergunta == 1){ 
    desenharCena("Qual seu filme\n preferido?")
  }
  else if (numeroPergunta == 2) {
  	desenharCena("Qual seu livro\n preferido?")
  }
   else if (numeroPergunta == 3) {
  	desenharCena("Qual sua fruta\n preferida?")
   }
  else{
  desenharCena('Seu nome é ')
  revelarNome()
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    if (numeroPergunta <= 3) {
    descobrirNome()
    }
    else{}
  }
}

function descobrirNome(){
	respostaTexto = resposta.value()
  if (respostaTexto.includes('.')) 
  	{console.log('tem ponto')}
  else{
    nome = nome + respostaTexto[0]
    console.log(nome)
  }
  numeroPergunta ++
    console.log(numeroPergunta)
    perguntar()
}

function revelarNome(){
	resposta.remove()
  textSize(50)
  text(nome, 223, 123) 
}







