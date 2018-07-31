//imagens
let imagemDoFundo;
let imagemDoRobo;
let imagemDoBalao;

//análise e resposta
let numeroDaPergunta = 0;
let caixaDeResposta;

function preload() {
  imagemDoFundo = loadImage("fundo.png");
  imagemDoRobo = loadImage("robo.png");
  imagemDoBalao = loadImage("balao.png");
}

function setup() {
  createCanvas(600, 400);
  noLoop();
  caixaDeResposta = createInput();
}

function draw() {
  background(imagemDoFundo);
  image(imagemDoRobo, 220, 200, 150, 150);
  image(imagemDoBalao, 145, 10, 300, 200);
  textSize(15);
  textAlign(CENTER);
  textStyle(BOLD);
  text("Seja bem vindo ao Alura Genius \n" +
    "Para adivinhar o seu nome, responda \n" +
    "minhas perguntas com frases \n" +
    "longas. \n" +
    "Clique na tela para começar", 290, 50);
}

function mousePressed() {
  if (numeroDaPergunta == 0) {
    numeroDaPergunta++
    perguntar();
  }
}

function perguntar() {
  if (numeroDaPergunta == 1) {
    image(imagemDoBalao, 145, 10, 300, 200);
    textSize(30);
    textAlign(CENTER);
    textStyle(BOLD);
    text("Qual o seu livro \n favorito?", 285, 70);
    exibirCaixaDeResposta();
  }
}

function exibirCaixaDeResposta() {
  caixaDeResposta.position(85, 360);
  caixaDeResposta.size(450, 20);
}