const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,paper;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(500,350,1000,10);

	paper = new Paper(200,200,30);
	box1 = new Dustbin(730,305,20,100);
	box2 = new Dustbin(810,345,150,20);
	box3 = new Dustbin(880,305,20,100);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  ground.display();
  paper.display();
  box1.display();
  box2.display();
  box3.display();

  drawSprites();
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:35, y:-35});
	}
}