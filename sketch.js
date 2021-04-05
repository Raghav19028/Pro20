var tom,tomImg,tom_run,tom_hp;
var jerry,jerryImg,jerry_run,jerry_hp;
var bg,bgImg;
function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png");

    tomImg=loadImage("images/cat1.png");
    jerryImg=loadImage("images/mouse1.png");

    jerry_run=loadAnimation("images/mouse2.png","images/mouse3.png");
    tom_run=loadAnimation("images/cat2.png","images/cat3.png");

    tom_hp=loadImage("images/cat4.png");
    jerry_hp=loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg=createSprite(500,400);
    bg.addImage("garden",bgImg);

    tom=createSprite(800,600,50,50);
    tom.addImage("tom",tomImg);
    tom.scale=0.14;
    
    jerry=createSprite(100,600,50,50);
    jerry.addImage("jerry",jerryImg);
    jerry.scale=0.12;

}

function draw() {

    background(255);
        tom.x=World.mouseX;
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(tom.width-mouse.width)/2){
        jerry.addImage("jerry",jerry_hp);
        tom.addImage("tom",tom_hp);
    }
    drawSprites();
}


function keyPressed(){

  if(keyDown("LEFT_ARROW")){
      tom.velocityX=-3;
      tom.addAnimation("run",tom_run);
      tom.changeAnimation("run");
      jerry.addAnimation("mouseTeasing",jerry_run);
      jerry.changeAnimation("mouseTeasing");
      jerry.frameDelay=25;
     }
    }
