const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload(){
rubbish.loadImage(cpper.png)
rubbishbin.loadImage(rbishbin.png)
backrground.loadImage(brdrrom.jpg)
}

var ground, gameState,engine, world,rubbishbin,rubbish,background,backgroundIMG;
function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);

  gameState = "start";

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  rubbishbin = new DustBin(720, 390, 100, 10);
  rubbish = new Paper(100, 300, 10);
  ground = Bodies.rectangle(width / 2, 400, width, 10,
  {
    isStatic: true
  });
  World.add(world, ground);
}

function draw() {
  if (gameState === "start") {
    background(brrdrom.jpg);
    textSize(50);
    fill("cyan");
    text("start", 50, 200)
    if (keyCode === UP_ARROW) {
      gameState = "play"
    }
  }
  if (gameState === "play") {
    rectMode(CENTER);
    background(brdroom.jpg);
    rubbishbin.display();
    rubbish.display();

  }
}


function keyPressed(){
  if (keyCode === UP_ARROW && gameState === "play") {
    Matter.Body.applyForce(rubbish.body, rubbish.body.position, {
      x: 12,
      y: -13
    });
  }
}
