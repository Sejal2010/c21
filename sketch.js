const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  var options1={
    restitution:0.95
  }
  ball = Bodies.circle(200,100,20,options1);
  World.add(world,ball)
  rectMode(CENTER);
  ellipseMode(RADIUS);

  btn1=createImg("right.png");
  btn1.position(220,30);
  btn1.size(50,50);
  btn2=createImg("up.png");
  btn2.position(150,30);
  btn2.size(50,50);
  btn2.mouseClicked(vforce);
  btn1.mouseClicked(hforce);
  btn3=createImg("push.png");
  btn3.position(180,80);
  btn3.size(50,50);
  btn3.mouseClicked(pforce);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20)
}

function vforce(){
Matter.Body.applyForce(ball,ball.position,{x:0,y:-0.05})
}

function hforce(){
Matter.Body.applyForce(ball,ball.position,{x:0.05,y:0})
}

function pforce(){
Matter.Body.applyForce(ball,ball.position,{x:0.05,y:-0.05})
}