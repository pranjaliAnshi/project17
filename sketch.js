var monkey , monkey_running

var banana ,bananaImage, obstacle, obstacleImage

var FoodGroup, obstacleGroup

var score,ground
var st 


function preload(){

  

  

monkey_running =  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

  

  bananaImage = loadImage("banana.png");

  obstaceImage = loadImage("obstacle.png");

 

}



function setup() {

  monkey=createSprite(80,315,20,20)

  monkey.addAnimation("moving",monkey_running)

  monkey.scale = 0.1

   //createCanvas(900, 600);

 ground = createSprite(400,350,900,10)

  ground.velocityX = -4

  

//ground.x =ground.width/2

  //console.log(ground.x)

  console.log(monkey.y)

  FoodGroup =  new Group()
obstacleGroup = new Group()
st = 0

}





function draw() {

 background("pink")
  

  if( ground.x<0){

  ground.x = ground.width /2;

  }
  
  

  if(keyDown("space")){

    monkey.velocityY = -15;

   

  }
  
  
  
  
  if(obstacleGroup.isTouching(monkey)){
    monkey.velocityY =  0
     FoodGroup.setVelocityXEach(0)
     obstacleGroup.setVelocityXEach(0) 
   FoodGroup.setLifetimeEach (-1);
     obstacleGroup.setLifetimeEach (-1) ;
   } 
  
  
  
 
  
  


  monkey.velocityY = monkey.velocityY + 0.8

  edges = createEdgeSprites

   monkey.collide ( ground)

text("hi",200,200,10,10)
  FoodG();  // CALL THE FUNCTION
  spawnObstacles(); //CALL THE FUNCTION
  
  
  stroke("black")
  textSize(20)
  fill("black")
  st = Math.ceil(frameCount/frameRate())
  text("Survival Time : " + st,100,50)
  
  
    
  drawSprites()

}





function FoodG(){

if (frameCount % 80 === 0) {

  var food = createSprite(400,200,40,10);

  food.y = Math.round(random(120,200));
  food.addImage(bananaImage)

  FoodGroup.add(food)

  food.lifetime = -1
  food.scale=0.1; //SCALE
  food.velocityX=-3;  //GIVE VELOCITY

}  
}
function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(400,315,10,40);
  // obstacle.velocityX = -(6 + score/100);
   
    
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
   obstacle.scale=0.1;  //SCALE
  obstacle.addImage(obstaceImage) //ADD IMAGE
   obstacle.velocityX=-3
   //add each obstacle to the group
    obstacleGroup.add( obstacle);//OBSTACLE SPELLING WAS WRONG
   
   if(monkey.isTouching(obstacle)){
    monkey.velocityX (0)
     banana.velocityX  (0)
     obstacle.velocityX( 0)
  // FoodG.setLifetimeEach(-1);
     //obstaclesGroup.setLifetimeEach(-1);
   } 
  
  
 }
}















