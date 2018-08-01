let imagemDoFundo;
let imagemDoRobo;
let imagemDoBalao;

function preload() {
  imagemDoFundo = loadImage("fundo.png");
  imagemDoRobo = loadImage("robo.png");
  imagemDoBalao = loadImage("balao.png");
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(imagemDoFundo);
  image(imagemDoRobo, 220, 200, 150, 150);
  image(imagemDoBalao, 145, 10, 300, 200);
}