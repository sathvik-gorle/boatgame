var ship, shipImg;
var seaImage;
var sea;

function preload(){
  ship_moving = loadAnimation("ship1.png", "ship2.png", "ship3.png", "ship4.png");
  seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(600,600);
  

  sea = createSprite(300, 300, 600, 600)
  sea.velocityX = -2
  sea.addImage(seaImage)
  
  ship = createSprite(300,400,10,100);
  ship.addAnimation("moving", ship_moving);
  ship.scale=0.25
  

  ship.x = 100  
}

function draw(){
  background("blue");
  

  if (sea.x<0){
    sea.x=300
  }

  drawSprites();
}
