
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var lamina
var lamina2

var angle = 60;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };

   var block_options ={
     isStatic: true

   }

  ground1 = Bodies.rectangle(100,400,400,20,ground_options);
  World.add(world,ground1);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ground = Bodies.rectangle(100,400,650,20,ground_options);
  World.add(world,ground); 
  
  lamina = Bodies.rectangle(200,130,1,10,ground_options)
  World.add(world, lamina)

  lamina2 = Bodies.rectangle(201,131,2,11,ground_options)
  World.add(world,lamina2)

  block = Bodies.rectangle(300,200,2,11,ground_options)
  World.add(world,block)
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);

  
Matter.Body.rotate(lamina, angle)
push()
ellipse(ball.position.x,ball.position.y,20);
rect(ground.position.x,ground.position.y,650,20) 
translate(lamina.position.x,lamina.position.y)
rotate(angle)
rect(0,0,150,20)
pop()

angle = angle + 0.5

Matter.Body.rotate(lamina2, angle)
push()
ellipse(ball.position.x,ball.position.y,20);
rect(ground.position.x,ground.position.y,650,20) 
translate(lamina2.position.x,lamina2.position.y)
rotate(angle)
rect(0,0,150,20)
pop()

angle = angle + 0.05

}


  