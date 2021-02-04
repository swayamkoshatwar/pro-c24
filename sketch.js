
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var dustbin1
var dustbin2
var dustbin3
var paper 
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;



	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow")

	dustbin1sprite=createSprite(695,650,150,20);
	dustbin1sprite.shapeColor=color("white")

	dustbin2sprite=createSprite(620,600,20,100);
	dustbin2sprite.shapeColor=color("white")

	dustbin3sprite=createSprite(770,600,20,100);
	dustbin3sprite.shapeColor=color("white")
	

	paper=new Paper(100,100,31);
	



	

	//Create the Bodies Here.

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);


    dustbin1 = Bodies.rectangle(width/695,650,150,20,{isStatic:true});
	World.add(world,dustbin1);
	
    dustbin2 = Bodies.rectangle(width/620,600,20,100,{isStatic:true});
    World.add(world,dustbin2);

	dustbin3 = Bodies.rectangle(width/770,600,20,100,{isStatic:true});
    World.add(world,dustbin3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  drawSprites();
 
}
function keypressed(){
if (keycode === up_arrow){


	matter.body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
   }
}


