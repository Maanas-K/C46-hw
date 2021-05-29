var player, ground;
var wall1,wall2;
var score;
var aliens, alienIMG;
var gameState = 0;


function preload(){

  alienIMG = loadImage("alien.png")

}

function setup() {
  createCanvas(1000,600);
 //createSprite(400, 200, 50, 50);

 player = new Player(400,200,50,50)
 ground = createSprite(500,600,1000,20)

 
 //score + Math.round(getFrameRate()/60);
  
 
}

function draw() {
  background("gray"); 

  fill ("red")
  textSize(20)
  text ("Score : "+score,900,50)
  score += 10;

  
  player.display();
  player.movement();
  

  //ground.collide(player)

  spawnWalls()
  spawnAliens()

  drawSprites();
}

function spawnWalls(){

    if(frameCount %90 === 0){

      wall1 = createSprite(1009,20,20,random(20,500))
      wall2 = createSprite(1009,580,20,random(20,500))

      wall1.shapeColor = "red"
      wall2.shapeColor = "green"

      wall1.velocityX = -(4 + 3* score/100)
      wall2.velocityX = -(4 + 3* score/100)

      

      console.log(score)
      
    }

}

function spawnAliens(){

  if(frameCount % 150 === 0){

    aliens = createSprite(random(400,900),random(200,400),50,50)
    aliens.addImage(alienIMG)
    aliens.scale = 0.5
    aliens.velocityX = random(-5,-2)
  }
}