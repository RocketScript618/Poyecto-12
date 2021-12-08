var street,streetImage;
var surfer,surfer_running;
var borderR,borderL;


function preload(){
  //pre-load images
  streetImage = loadImage("path.png");
  surfer_running = loadAnimation("Runner-1.png","Runner-1.png","Runner-1.png","Runner-2.png","Runner-2.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  street = createSprite(200,200);
  street.addImage("streets",streetImage);
  surfer = createSprite(200,300);
  surfer.addAnimation("running",surfer_running);
  surfer.scale = 0.1;
  borderL = createSprite(-10,200,100,400);
  borderL.visible= false;
  borderR = createSprite(420,200,100,400);
  borderR.visible= false;
}

function draw() {
  background("grey");

  surfer.x = mouseX;
  street.velocityY = 5;
  if(street.y>400){
    street.y = street.height/6.5;
  }
  surfer.collide(borderL);
  surfer.collide(borderR);
  drawSprites();
}
