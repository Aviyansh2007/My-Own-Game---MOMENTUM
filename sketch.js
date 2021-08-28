var Skytrixsha;
var Terrorists, TerroristsGroup;
var Bullet, BulletGroup;
var CrossHair;
var Gun;


var gameState = 0;




function preload(){
  BgImage = loadImage("./png/BG image.png")
  TerroristImage = loadAnimation("./png/2/run/2_terrorist_2_Run_000.png", "./png/2/run/2_terrorist_2_Run_001.png", "./png/2/run/2_terrorist_2_Run_002.png",
  "./png/2/run/2_terrorist_2_Run_003.png", "./png/2/run/2_terrorist_2_Run_004.png", "./png/2/run/2_terrorist_2_Run_005.png",
  );
  Coalition = loadAnimation("./png/3/run/3_terrorist_3_Run_000.png","./png/3/run/3_terrorist_3_Run_001.png",
  "./png/3/run/3_terrorist_3_Run_002.png","./png/3/run/3_terrorist_3_Run_003.png","./png/3/run/3_terrorist_3_Run_004.png",
  "./png/3/run/3_terrorist_3_Run_005.png");

  BulletImage = loadImage("./png/Bullet Image.png");

  CrossHairImage = loadImage("./png/plain crosshair.png");

  GunImage = loadImage("./png/AK-47.png");
}
 
function SpawnTerrorists(){
  if(frameCount % 300 ==0){
    Terrorists= createSprite(displayWidth-10, displayHeight-130);
  Terrorists.addAnimation("running",TerroristImage);
  Terrorists.visible = true;
  Terrorists.scale = 0.2;
  //Terrorists.rotateToDirection = true;
  Terrorists.velocityX = -2;
  Terrorists.mirrorX(-1);
  TerroristsGroup.add(Terrorists);
  }
  
  


}

function spawnBullets(){
  Bullet = createSprite(170,displayHeight-120);
  Bullet.addImage(BulletImage);
  Bullet.scale = 0.04;
  Bullet.velocityX = 50;
  BulletGroup.add(Bullet);
}




function setup() {
  createCanvas(1700,750);
  BG = createSprite(800,400)
  BG.addImage(BgImage);
  BG.visible = false;
  BG.scale = 1.5;
  BG.velocityX = -3

  Skytrixsha = createSprite(60,displayHeight-130);
  Skytrixsha.addAnimation("Run", Coalition);
  Skytrixsha.scale = 0.2;

  
  
  CrossHair = createSprite(850,540);
  CrossHair.addImage(CrossHairImage);
  CrossHair.scale = 0.2;

  Gun = createSprite(130,displayHeight-110);
  Gun.addImage(GunImage);
  Gun.scale = 0.05
  
  
 BulletGroup = new Group()

 TerroristsGroup = new Group()

}

function draw() {
  background(0); 
  if (gameState ===0){
    Skytrixsha.visible = false;
   
    
    textSize(20)
    text("In 2019 our Indian Government sent 5 news reporters to Afghanistan to do the coverage of terrorism there, Indian Government did an agreement that our newsreporters will be staying safe there" , 100, 200)
    
    if(keyDown("right")){
      gameState = 1;

    }


    
  }
if (gameState ===1){
  
 if(keyDown("space")){
  spawnBullets();
 }

  
  BG.visible = true;
  Skytrixsha.visible = true;
  
  
  if(BG.x<400){
    BG.x = 800;

    
  }
  SpawnTerrorists();
  for(var i=0;i<BulletGroup.length;i++){
    for(var J=0;J<TerroristsGroup.length;J++){
      if(BulletGroup.get(i).isTouching(TerroristsGroup.get(J))){
        BulletGroup.get(i).destroy()
        TerroristsGroup.get(J).destroy()
      } 
    }
   
  }
  //if(BulletGroup.isTouching(TerroristsGroup)){
    console.log("HELLO");
  //}
}


  

  drawSprites();
}