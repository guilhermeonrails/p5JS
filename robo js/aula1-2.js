//imagens
let imagemDoFundo;
let imagemDoRobo;
let ImagemDoBalao;

//carregar imagens
function preload() {
    imagemDoFundo = loadImage("fundo.png");
    imagemDoRobo = loadImage("robo.png");
    ImagemDoBalao = loadImage("balao.png");
}

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(imagemDoFundo);
    image(imagemDoRobo, 150, 200, 150, 150);
    image(ImagemDoBalao, 80, 10, 300, 200);
}