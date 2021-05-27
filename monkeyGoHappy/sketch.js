
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground
var score = 0
var SurvivalTime = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  
  createCanvas(500,400);
  
  monkey = createSprite(50,300);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1
  
  ground=createSprite(500,350,900,10);
  ground.velocityX=-4
  ground.x=ground.width/2
  
  obstacleGroup = new Group ();
  FoodGroup = new Group ();
  
}

function draw() {
  
  background("lightblue");
  
  textSize(20);
  text ("score: "+ score, 30, 30)
  
  textSize(20);
  text ("Survival Time: "+SurvivalTime, 200, 30)
  SurvivalTime = SurvivalTime + Math.round(getFrameRate()/60);
  
  if (ground.x < 50){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")){
    monkey.velocityY=-5
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  
  if(FoodGroup.isTouching(monkey)){
    score = score + 1
    banana.destroy()
    }
  
  spawnObstacle ();
  spawnFood ();

  drawSprites();
}

function spawnObstacle(){
   if(frameCount%300 === 0){
     obstacle = createSprite (400,330);
     obstacle.addImage(obstacleImage);
     obstacle.velocityX = -2
     obstacle.scale=0.1;
     
     obstacle.lifetime = 500
     obstacleGroup.add(obstacle) 
   }
}

function spawnFood (){
  if(frameCount%200 === 0){
    banana = createSprite (400,200);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(120,200));
    banana.velocityX = -2
    banana.scale=0.1;
    
    banana.lifetime = 500
    FoodGroup.add(banana);
   }
}






