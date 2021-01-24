var helicopterIMG, helicopterSprite, packageSprite,rect1, rect2, rect3 ,rect1Body, rect2Body, rect3Body, packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	rect1=createSprite(width/2, height-45, 150, 15);
	rect1.shapeColor="red";

	rect2=createSprite(width/2-70, height-75, 15, 70);
	rect2.shapeColor="red";

	rect3=createSprite(width/2+70, height-75, 15, 70);
	rect3.shapeColor="red";

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true} );
	World.add(world, packageBody);

	rect1Body = Bodies.rectangle(width/2, height-45, 150, 15 , {isStatic:true} );
	World.add(world, rect1Body);

	rect2Body = Bodies.rectangle(width/2-70, height-75, 15, 70 , {isStatic:true} );
	World.add(world, rect2Body);

	rect3Body = Bodies.rectangle(width/2+70, height-75, 15, 70 , {isStatic:true} );
	World.add(world, rect3Body);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y

  rect1.x= rect1Body.position.x
  rect1.y= rect1Body.position.y

  rect2.x= rect2Body.position.x
  rect2.y= rect2Body.position.y

  rect3.x= rect3Body.position.x
  rect3.y= rect3Body.position.y

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
  }
}