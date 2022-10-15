
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world;
var engine;
var rock,boy,tree,mangos,ground;
var boyimg, boyimg2, rockimg, treeimg;
var mangos1,mangos2,mangos3,mangos4,mangos5;
var fruitConstraint;


function preload(){
  boyimg = loadAnimation('boy1.png');
  boyimg2 = loadAnimation('boy2.png');
  treeimg = loadImage('tree.png');
  rockimg = loadImage('stone.png')
}

function setup() {
  createCanvas(800,600);
  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(300,300,300,300);
  
  
  mangos = new mango(200,250,50,50);
  mangos2 = new mango(200,200,70,70);
  mangos3 = new mango(300,150,80,80);
  mangos4 = new mango(200,100,60,60);
  mangos5 = new mango(300,250,40,40);
  mangos1 = new mango(100,230,100,100);

  boy = createSprite(700,460);
  boy.addAnimation("standing",boyimg);
  boy.addAnimation("throwing", boyimg2);
  boy.scale=0.5
  

  tree = createSprite(200,300);
  tree.addImage(treeimg);
  tree.scale=2
  var stoneOptions = {
    isStatic:true
  }
  stone = Bodies.circle(660,460,30,stoneOptions)
  World.add(world,stone);
  var constraintOptions={
    bodyA:stone,
    pointB:{x:660,y:460},
    stiffness:0.04,
    length:5
  }
  stoneConstraint = Matter.Constraint.create(constraintOptions);
  World.add(world,stoneConstraint);
}



function draw() 
{
  background(51);
  
  Engine.update(engine);


  if(frameCount == 20){
    boy.changeAnimation("throwing")
  }
  if(frameCount == 50){
    boy.changeAnimation("standing")
  }

  drawSprites();
  mangos.show();
  mangos2.show();
  mangos1.show();
  
  mangos3.show();
  mangos4.show();
  mangos5.show();

  image(rockimg,stone.position.x,stone.position.y,30,30)
  console.log(stoneConstraint.bodyA.position.x);
  line(stoneConstraint.bodyA.position.x,stoneConstraint.BodyA.position.y,stoneConstraint.pointB.x,stoneConstraint.pointB.y)
  
}

