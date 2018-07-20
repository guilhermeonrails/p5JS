let fundo;
let robo;
let balao;
let numeroPergunta = 0;

function preload() {
    fundo = loadImage("fundo.png");
    robo = loadImage("robo.png");
    balao = loadImage("balao.png");
}

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(fundo);
    image(robo, 150, 200, 150, 150);
    image(balao, 80, 10, 300, 200);
    textSize(15);
    textAlign(CENTER);
    textStyle(BOLD);
    text("Seja bem vindo ao Alura Genius! \n" +
        "Para adivinhar seu nome, responda \n" +
        "minhas perguntas com frases\n" +
        "longas. \n" +
        "Vamos começar?", 223, 50);
}

function mousePressed() {
    console.log("clicou");
    if (numeroPergunta == 0) {
        numeroPergunta++;
        console.log('clicou');
        // queremos perguntar
        perguntar();
    }
}

