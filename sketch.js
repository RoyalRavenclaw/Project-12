var path,invisiblePath1,invisiblePath2,pathImage;
var runner,bomb,drink,power,coin,runnerAnime;


function preload(){
  //pre-load images
  pathImage=loadImage("path.png");
 runnerAnime=loadAnimation("Jake1.png","Jake2.png","Jake3.png","Jake4.png","Jake5.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
path=createSprite(200,380);
 path.addImage("path",pathImage);
 path.velocityY= +3;
 runner=createSprite(200,350);
 runner.addAnimation("runner",runnerAnime);
 runner.scale=0.5;
 invisiblePath1=createSprite(30,200,60,400);
 invisiblePath1.visible=false;
invisiblePath2=createSprite(370,200,60,400);
invisiblePath2.visible=false;
}

function draw() {
  background(0);
 drawSprites();
 if(path.y>=400){
path.y=path.width/2;
 }
 runner.x=World.mouseX;
 runner.collide(invisiblePath1);
 runner.collide(invisiblePath2);
 
}
