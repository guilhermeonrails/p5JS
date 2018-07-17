// imagens
let imagemDoFundo;
let imagemDoRobo;
let imagemDoBalao;

//análise e respostas
let campoDeResposta;
let numeroPergunta = 0;
let nome = '';

//carregando as imagens
function preload() {
  imagemDoFundo = loadImage("fundo.png");
  imagemDoRobo = loadImage("robo.png");
  imageDoBalao = loadImage("balao.png");
}

//quando ligar o jogo
function setup() {
  createCanvas(600, 400);
  noLoop();
  campoDeResposta = createInput();
}

function draw() {
  incluirImagens();
  textSize(15);
  textAlign(CENTER);
  textStyle(BOLD);
  text(`Seja bem vindo ao Alura Genius!
Para adivinhar seu nome, responda
minhas perguntas com frases 
longas.
Clique na tela para começar`, 290, 50);
}

function incluirImagens(){
	background(imagemDoFundo);
  image(imagemDoRobo, 220, 200, 150, 150);
  image(imageDoBalao, 145, 10, 300, 200);
}

function mousePressed() {
  if (numeroPergunta == 0) {
    numeroPergunta++;
    perguntar();
  }
}

function desenharCena(texto) {
  incluirImagens();
  textSize(30);
  textAlign(CENTER);
  textStyle(BOLD);
  text(texto, 285, 70);
  caixaDeResposta();
}

//adicionar caixa de resposta
function caixaDeResposta(){
	campoDeResposta.size(450, 20);
  campoDeResposta.position(85, 360);
  campoDeResposta.elt.placeholder = ('RESPONDA AQUI E PRESSIONE ENTER');
  campoDeResposta.value('');
}

function perguntar() {
  if (numeroPergunta == 1) {
    desenharCena('Qual seu filme\n preferido?');
  } else if (numeroPergunta == 2) {
    desenharCena("Qual seu livro\n preferido?");
  } else if (numeroPergunta == 3) {
    desenharCena("Qual sua fruta\n preferida?");
  } else {
    desenharCena('Seu nome é ');
    revelarNome();
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    if (numeroPergunta <= 3 && campoDeResposta.value() != '') {
      descobrirNome();
    }
  }
}

function descobrirNome() {
  let respostaTexto;
  respostaTexto = campoDeResposta.value();
  if (verificarPonto(respostaTexto)){
    nome = nome + respostaTexto[0];
  }
  numeroPergunta++;
  perguntar();
}

function verificarPonto(resposta){
	return !resposta.includes('.');
}

function revelarNome() {
  campoDeResposta.remove();
  textSize(50);
  text(nome, 280, 123);
}