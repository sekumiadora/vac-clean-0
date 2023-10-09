const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, quarto,fundo, protagonistaimg,chaveimg,chave, banheiroimg,banheiro, po1img, po1, po2img, po2, po3img, po3,po4, protagonista, canvasivisivel;
var gamestate = 3;
var po5,po6,po7,po8,po9,po10,vac,botao;
var score = 0;
var percent = -1;

function preload() {
  quarto = loadImage("assets/casa.png");
  protagonistaimg = loadImage("assets/protagonista.png");
  //banheiroimg = loadImage("assets/banheiro.png");
  po1img = loadImage("assets/po 1.png");
  po2img = loadImage("assets/po 2.png");
  po3img = loadImage("assets/po 3.png");
  chaveimg = loadImage("assets/chave.png");
  vac = loadSound("assets/159348__huminaatio__vacuum-cleaner-01.wav")
}

function setup() {
  var canvas = createCanvas(1100,800 );
  canvas.center();
  engine = Engine.create();
  world = engine.world;
  fundo = createSprite(550,400);
  fundo.addImage(quarto);
  fundo.scale = 1.12
  protagonista = createSprite(350, 350);
  protagonista.addImage(protagonistaimg);
  protagonista.scale = 1;
  botao = createSprite(1000,50,80,40);
  // canvasivisivel = createSprite(350,350,700,700);
  //canvasivisivel.visible=false
  po1 = createSprite(200, 200)
  po1.addImage(po1img);
  po1.scale = 2.3
  po1.setCollider("circle", 0, 0, 0.1);

  po2 = createSprite(500, 600)
  po2.addImage(po2img);
  po2.scale = 2.3
  po2.setCollider("circle", 0, 0, 0.1);

  po3 = createSprite(700, 300)
  po3.addImage(po3img);
  po3.scale = 2.3
  po3.setCollider("circle", 0, 0, 0.1);

  po4 = createSprite(200, 600)
  po4.addImage(po1img);
  po4.scale = 2.3
  po4.setCollider("circle", 0, 0, 0.1);

  po5 = createSprite(100, 640)
  po5.addImage(po2img);
  po5.scale = 2.3
  po5.setCollider("circle", 0, 0, 0.1);

  po6 = createSprite(500, 100)
  po6.addImage(po3img);
  po6.scale = 2.3
  po6.setCollider("circle", 0, 0, 0.1);

  po7 = createSprite(200, 400)
  po7.addImage(po1img);
  po7.scale = 2.3
  po7.setCollider("circle", 0, 0, 0.1);

  po8 = createSprite(600, 700)
  po8.addImage(po2img);
  po8.scale = 2.3
  po8.setCollider("circle", 0, 0, 0.1);

  po9 = createSprite(550, 200)
  po9.addImage(po3img);
  po9.scale = 2.3
  po9.setCollider("circle", 0, 0, 0.1);

  po10 = createSprite(200, 50)
  po10.addImage(po3img);
  po10.scale = 2.3
  po10.setCollider("circle", 0, 0, 0.1);

}

function draw() {
  Engine.update(engine);

  background("white");
  fill("black");
    textSize(32);
    text("Dindin🪙: " + score, 30, 50);
  //camera(0,0,protagonista.x,protagonista.y);
  //text(mouseX + "," + mouseY, mouseX, mouseY);
  if(mousePressedOver(botao)){
     
    gamestate = 1
    vac.pause();
  }
  if (gamestate === 1) {
    
    Vquarto();
    if(!vac.isPlaying()){
    vac.play();
    vac.setVolume(0.7);
    }
    
    if (score === 10) {
     // gamestate = 2
     fill("black");
     textSize(32);
     text("Pegue a chave" , 330, 400);
     chave=createSprite(350,350,100,100)
     chave.addImage(chaveimg);
     chave.scale = 4
     if (mousePressedOver(chave)) {
      gamestate = 2
      score = 0
     }
    } 
  }
  if (gamestate === 2 ) {
    vac.pause();
    fill("black");
    textSize(32);
    text("CABO",550,400)
    background(banheiro);
    Vbanheiro();
    fill("black");
    textSize(32);
    text("Dindin🪙: " + score, 30, 50);
    if (score === 3) {
      gamestate = 2
    } 
  }
  if (keyDown("w")) {
    protagonista.y = protagonista.y - 5
  }
  if (keyDown("s")) {
    protagonista.y = protagonista.y + 5
  }
  if (keyDown("a")) {
    protagonista.x = protagonista.x - 5
  }
  if (keyDown("d")) {
    protagonista.x = protagonista.x + 5
  }

   //girar imagem do player
  if(keyDown("right")){
    protagonista.rotateToDirection = true;
    protagonista.rotation = protagonista.rotation + 10;
  }
  if(keyDown("left")){
    protagonista.rotateToDirection = true;
    protagonista.rotation = protagonista.rotation - 10;
  }
  
  
  drawSprites();


}

function Vquarto() {

  //protagonista.rotateTowards(World.mouse,0.1,0);
  if (protagonista.collide(po1)) {
    score += 1;
    po1.remove();
    updatePercent()
  }

  if (protagonista.collide(po2)) {
    score += 1;
    po2.remove();
    updatePercent()
  }

  if (protagonista.collide(po3)) {
    score += 1;
    po3.remove();
    updatePercent()
  }

  if (protagonista.collide(po4)) {
    score += 1;
    po4.remove();
    updatePercent()
  }

  if (protagonista.collide(po5)) {
    score += 1;
    po5.remove();
    updatePercent()
  }

  if (protagonista.collide(po6)) {
    score += 1;
    po6.remove();
    updatePercent()
  }
  
  if (protagonista.collide(po7)) {
    score += 1;
    po7.remove();
    updatePercent()
  }

  if (protagonista.collide(po8)) {
    score += 1;
    po8.remove();
    updatePercent()
  }

  if (protagonista.collide(po9)) {
    score += 1;
    po9.remove();
    updatePercent()
  }

  if (protagonista.collide(po10)) {
    score += 1;
    po10.remove();
    updatePercent()
  }
  
 porcentagem();
}

function Vbanheiro(){
  if (protagonista.collide(po1)) {
    score += 1;
    po1.remove();
    updatePercent()
  }
  if (protagonista.collide(po2)) {
    score += 1;
    po2.remove();
    updatePercent()
  }
  if (protagonista.collide(po3)) {
    score += 1;
    po3.remove();
    updatePercent()
  }
}
function porcentagem() {
  fill("white");
  rect(250, 50, 200, 10);
  fill("green");
  rect(250, 50, percent, 10);
}
function updatePercent() {
  percent += 20;
}