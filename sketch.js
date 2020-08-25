
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bob1,bob2,bob4 ,bob4,bob5;
var rope1,rope2;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(200,450,20,20);
	bob2 = new Bob(240,450,20,20);
	bob3 = new Bob(280,450,20,20);
	bob4 = new Bob(320,450,20,20);
	bob5 = new Bob(360,450,20,20);


	ground = new Roof(270,300,300,20)

	rope1 = new Rope(bob1.body,Roof.body);

	




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();



 ground.display();

 

}



