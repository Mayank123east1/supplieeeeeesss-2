var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var boxpart1,boxpart2,boxpart3;

var packageBody,ground,boxpart1Body,boxpart2Body,boxpart3Body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() 
{
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	boxpart1 = createSprite(240,610,20,100);
	boxpart1.shapeColor=color("red");
	boxpart2 = createSprite(460,610,20,100);
	boxpart2.shapeColor=color("red");
	boxpart3 = createSprite(350,650,200,20);
	boxpart3.shapeColor=color("red");

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	boxpart1Body = Bodies.rectangle(240,610,20,100,{isStatic:true});
	World.add(world,boxpart1Body );
	boxpart2Body = Bodies.rectangle(460,610,20,100,{isStatic:true});
	World.add(world,boxpart2);
	boxpart3Body = Bodies.rectangle(350,650,200,20,{istatic:true});
	World.add(world,boxpart3Body);
	


	Engine.run(engine);
	keyPressed();
  
}


function draw() 
{
  rectMode(CENTER);
  background(0);
  console.log(packageSprite.x);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() 
{
 if (keyCode === DOWN_ARROW)
  {
  
	Matter.Body.setStatic(packageBody, false);

  }

}



