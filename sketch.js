var waste,wasteBody,waste_options
var ground,groundBody,ground_options, box1,box2,box3
  
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);
  
  waste_options={
    isStatic:true
    
   
  }
  ground_options={
    isStatic:true
  }
 
  
	engine = Engine.create();
  world = engine.world;
  waste=createSprite(100,580,15,15,waste_options)
  World.add(world,waste)
  waste.shapeColor='red'
  
  wasteBody=Bodies.circle(100,580,400,waste_options)
World.add(world,wasteBody)
    
    ground=createSprite(400,590,1200,10,ground_options)
     World.add(world,ground)

  groundBody=Bodies.rectangle(400,600,1200,10,ground_options)
  World.add(world,groundBody)
 
box1=new Box(580,530)
box2=new Box(420,530)
box3=new Box2(500,580,120,20)
Engine.run(engine);
    
}


function draw() {
 
  background('black');
  

  drawSprites();
waste.x=wasteBody.position.x
waste.y=wasteBody.position.y
  
  ground.x=groundBody.position.x
ground.y=groundBody.position.y

box1.display();
box2.display();
box3.display();

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(wasteBody,wasteBody.position,{x:60,y:-30})
  }
}




}




