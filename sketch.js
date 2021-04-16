const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground;
var ball;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
 
  box1 = new Box(600,320,70,70);
  box2 = new Box(820,320,70,70);
  pig1 = new Pig(710,350);
  log1 = new Log(710,260,300,PI/2);
  box3 = new Box(600,240,70,70);
  box4 = new Box(820,240,70,70);
  pig2 = new Pig(710,220,);
  log2 = new Log(710,180,300,PI/2);
  box5 = new Box(710,160,70,70);
  log3 = new Log(660,120,150,PI/7);
  log4 = new Log(770,120,150,-PI/7);
  bird = new Bird(100,100);
  ground = new Ground();
}

function draw() {
  background(0);  
  Engine.update(engine);
 
  box1.display();
  box2.display();
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
  log3.display();
  log4.display();
  box5.display();
  bird.display();
  ground.display();
}