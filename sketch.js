
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint ;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roofObject, rope1, rope2, rope3, rope4, rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1=new Bob(300,350,50);
	bobObject2=new Bob(350,350,50);
	bobObject3=new Bob(400,350,50);
	bobObject4=new Bob(450,350,50);
	bobObject5=new Bob(500,350,50);
	ground = new Roof(400,100,300,20);
	rope1 = new Rope(bobObject1.body, roofObject.body, 0, 0);``
    rope2 = new Rope(bobObject2.body, roofObject.body,50,0);
    rope3 = new Rope(bobObject3.body, roofObject.body,100, 0);
    rope4 = new Rope(bobObject4.body, roofObject.body, -50, 0);
    rope5 = new Rope(bobObject5.body, roofObject.body, -100, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
    bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
	ground.display();
	
  drawSprites();
 
}



