let fundo
let robo
let balao
let resposta
let numeroPergunta = 0

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
    if (numeroPergunta == 0) {
        numeroPergunta++;
        console.log('clicou');
        perguntar();
    }
}

function perguntar() {
    background(fundo)
    image(robo, 150, 200, 150, 150)
    image(balao, 80, 10, 300, 200)
    textSize(30)
    textAlign(CENTER)
    textStyle(BOLD)
    text("Qual o seu \n" +
        "FILME preferido?", 223, 70)
    resposta.size(400, 20)
    resposta.position(50, 360)
    resposta.elt.placeholder = ('RESPONDA AQUI')
}
