
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground;
var dustbin1,dustbin2,dustbin3;
var paper;


function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);

	dustbin1 = new Dustbin (880,380,200,20);
	dustbin2 = new Dustbin (800,360,20,300);
	dustbin3 = new Dustbin (960,360,20,300);
	

	paper=new Paper(200,310,70);

	//Render the objects

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250, 227, 162);
  
  ground.display();

  paper.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();
}

function keyPressed(){

	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:850,y:-850});
	}
}

