var bg, cat,  mouse, mouseTeasing;
var mouseImage1, catImage1, catRunning, catSitting, mouseLooking;

function preload() {

  bg = loadImage("images/garden.png"); 
  tomImg1= loadAnimation("images/tomOne.png"); 
  tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png"); 
  tomImg3= loadAnimation("images/tomFour.png"); 
  jerryImg1=loadAnimation("images/jerryOne.png"); 
  jerryImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png"); 
  jerryImg3=loadAnimation("images/jerryFour.png");
}

function setup(){
    createCanvas(1000, 800);
    //create tom and jerry sprites here
    jerry = createSprite(100, 650, 10, 10);
    tom = createSprite(800, 650, 10, 10);

    jerry.addAnimation("jerry1",jerryImg1);
    tom.addAnimation("tom1", tomImg1);
    

    jerry.scale = 0.1;
    tom.scale = 0.1;
}


function draw() { 
  background(bg); 
  if(tom.x - jerry.x < (tom.width - jerry.width)/2) { 
    tom.velocityX = 0; 
    tom.addAnimation("tomLastImage", tomImg3); 
    tom.x = 200;
    tom.scale = 0.2; 
    tom.changeAnimation("tomLastImage"); 
    jerry.addAnimation("jerryLastImage", jerryImg3); 
    jerry.scale = 0.15; 
    jerry.changeAnimation("jerryLastImage"); 
  }
    drawSprites();
}



function keyPressed(){ 
  if(keyCode === LEFT_ARROW){ 
    tom.velocityX = -5; 
    tom.addAnimation("tomRunning", tomImg2); 
    tom.changeAnimation("tomRunning"); 
    jerry.addAnimation("jerryTeasing", jerryImg2); 
    jerry.frameDelay = 25; 
    jerry.changeAnimation("jerryTeasing"); }
}
