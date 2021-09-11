const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var blower
var mouth
var ball
var btn


function setup() {
  createCanvas(800,800);
  engine = Engine.create()
  world = engine.world;

  var options = {
    isStatic: true
  }
  blower = Bodies.rectangle(500,400,150,150,options);
  World.add(world,blower);

  mouth = Bodies.rectangle(350,400,150,15,options);
  World.add(world,mouth);

  var ball_options = {
    friction : 0.2,
    density: 0.05,
    restitution : 0.7,
    isStatic : false
  }
  ball = Bodies.circle(500,300,15,ball_options);
  World.add(world,ball);

  btn = createButton("Click me To Blow");
  btn.position(500,550)
  btn.mousePressed(blow)

  rectMode(CENTER);
  ellipseMode(RADIUS);

  
}

function draw() {
  background(255,255,255);  

  Engine.update(engine);
  
  rect(blower.position.x,blower.position.y,150,150);
  rect(mouth.position.x,mouth.position.y,150,15);  
  ellipse(ball.position.x,ball.position.y,15,15);
}

function blow(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.7});
}