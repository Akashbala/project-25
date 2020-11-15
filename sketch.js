
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world
var d

function preload()
{
	d=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1400, 400);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	ground=new Ground(700,370,1400,10)

	wall1=new Wall(1090,360,100,10)
	wall2=new Wall(1040,315,10,100)
	wall3=new Wall(1140,315,10,100)
	ball1=new Ball(300,360)

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(255);
  ball1.display()
  wall1.display()
  wall2.display()
  wall3.display()
  ground.display()
 
  imageMode(CENTER);
  image(d,1090,315,110,110);
 
 
}


function keyPressed() {

	if (keyCode === UP_ARROW) {

       Matter.Body.applyForce(ball1.body,ball1.body.position,{x:65,y:-65})

	}
}







