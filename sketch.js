var score =0;
var gun,bluebubble,redbubble, bullet, backBoard;
var colorfulBubble, colorfulBubbleImg,colorfulBubbleGroup
var gunImg,bubbleImg, bulletImg, blastImg, backBoardImg;
var purpleBubble, purpleBubbleImg, purpleBubbleGroup
var redBubbleGroup, redBubbleGroup, bulletGroup;
var popSound

var life =5;
var score=0;
var gameState=1

function preload(){
  gunImg = loadImage("gun1.png")
  blastImg = loadImage("blast.png")
  bulletImg = loadImage("bullet1.png")
  blueBubbleImg = loadImage("waterBubble.png")
  redBubbleImg = loadImage("redbubble.png")
  backBoardImg= loadImage("back.jpg")
  colorfulBubbleImg = loadImage("soapBubble.png")
  purpleBubbleImg = loadImage("purpleBubble.png")
  popSound = loadSound("bubble_pop.mp3")
}
function setup() {
  createCanvas(800, 800);

  backBoard= createSprite(50, width/2, 100,height);
  backBoard.addImage(backBoardImg)
  
  gun= createSprite(100, height/2, 50,50);
  gun.addImage(gunImg)
  gun.scale=0.2
  
  bulletGroup = createGroup();   
  blueBubbleGroup = createGroup();   
  redBubbleGroup = createGroup();   
  colorfulBubbleGroup = createGroup()
  purpleBubbleGroup = createGroup()
  heading= createElement("h1");
  scoreboard= createElement("h1");
}

function draw() {
  background("#BDA297");
  
  heading.html("Life: "+life)
  heading.style('color:red'); 
  heading.position(150,20)

  scoreboard.html("Score: "+score)
  scoreboard.style('color:red'); 
  scoreboard.position(width-200,20)

  if(gameState === 1){
    gun.y=mouseY  

    if (frameCount % 80 === 0) {
      drawblueBubble();
    }

    if (frameCount % 100 === 0) {
      drawredBubble();
    }

    if (frameCount % 70 === 0) {
      drawcolourfulBubble();
    }

    if (frameCount % 120 === 0) {
      drawpurpleBubble();
    }

    if(keyDown("space")){
      shootBullet();
    }

    if (blueBubbleGroup.collide(backBoard)){
      handleGameover(blueBubbleGroup);
    }
    
    if (redBubbleGroup.collide(backBoard)) {
      handleGameover(redBubbleGroup);
    }
    
    if (purpleBubbleGroup.collide(backBoard)) {
      handleGameover(purpleBubbleGroup);
    }

    /*if(blueBubbleGroup.(bulletGroup)){
      handleBubbleCollision(blueBubbleGroup);
    }*/

    /*if(blueBubbleGroup.collide(bulletGroup)){
      handleBubbleCollision();
    }*/
    
    /*if(blueBubbleGroup.collide()){
      handleBubbleCollision(blueBubbleGroup);
    }*/
    
    if(blueBubbleGroup.collide(bulletGroup)){
      handleBubbleCollision(blueBubbleGroup);
      popSound.play()
    }

    if(redBubbleGroup.collide(bulletGroup)){
      handleBubbleCollision(redBubbleGroup);
      popSound.play()
    }

    if(colorfulBubbleGroup.collide(bulletGroup)){
      handleBubbleCollision2(colorfulBubbleGroup);
      popSound.play()
    }

    if(purpleBubbleGroup.collide(bulletGroup)){
      handleBubbleCollision3(purpleBubbleGroup);
      popSound.play()
    }

    drawSprites();
  }
    
  
}

function drawblueBubble(){
  bluebubble = createSprite(800,random(20,780),40,40);
  bluebubble.addImage(blueBubbleImg);
  bluebubble.scale = 0.1;
  bluebubble.velocityX = -8;
  bluebubble.lifetime = 400;
  blueBubbleGroup.add(bluebubble);
  
}

function drawredBubble(){
  redbubble = createSprite(800,random(20,780),40,40);
  redbubble.addImage(redBubbleImg);
  redbubble.scale = 0.1;
  redbubble.velocityX = -8;
  redbubble.lifetime = 400;
  redBubbleGroup.add(redbubble);
 
}

function drawcolourfulBubble(){
  colorfulBubble = createSprite(800,random(20,780),40,40);
  colorfulBubble.addImage(colorfulBubbleImg);
  colorfulBubble.scale = 0.3;
  colorfulBubble.velocityX = -7;
  colorfulBubble.lifetime = 400;
  colorfulBubbleGroup.add(colorfulBubble);
 
}

function drawpurpleBubble(){
  purpleBubble = createSprite(800,random(20,780),40,40);
  purpleBubble.addImage(purpleBubbleImg);
  purpleBubble.scale = 0.2;
  purpleBubble.velocityX = -7;
  purpleBubble.lifetime = 400;
  purpleBubbleGroup.add(purpleBubble);
  
}

function shootBullet(){
  bullet= createSprite(150, width/2, 50,20)
  bullet.y= gun.y-20
  bullet.addImage(bulletImg)
  bullet.scale=0.12
  bullet.velocityX= 7
  bulletGroup.add(bullet)
}

function handleBubbleCollision(bubbleGroup){
    if (life > 0) {
       score=score+1;
    }

    blast= createSprite(bullet.x+60, bullet.y, 50,50);
    blast.addImage(blastImg) 

    /* blast= sprite(bullet.x+60, bullet.y, 50,50);
    blast.addImage(blastImg) */

    /* blast= createSprite(bullet.x+60, bullet.y, 50,50);
    blast.add(blastImg) */

    /* blast= createSprite(bullet.x+60, bullet.y, 50,50);
    image(blastImg) */
    
    blast.scale=0.3
    blast.life=20
    bulletGroup.destroyEach()
    bubbleGroup.destroyEach()
   
}

function handleBubbleCollision2(bubbleGroup){
  if (life > 0) {
     score=score+2;
  }

  blast= createSprite(bullet.x+60, bullet.y, 50,50);
  blast.addImage(blastImg) 

  blast.scale=0.3
  blast.life=20
  bulletGroup.destroyEach()
  bubbleGroup.destroyEach()
}

function handleBubbleCollision3(bubbleGroup){
  if (life > 0) {
    
  }

  blast= createSprite(bullet.x+60, bullet.y, 50,50);
  blast.addImage(blastImg) 

  blast.scale=0.3
  blast.life=20
  bulletGroup.destroyEach()
  bubbleGroup.destroyEach()
}

function handleGameover(bubbleGroup){
  
    life=life-1;
    bubbleGroup.destroyEach();
    

    if (life === 0) {
      gameState=2
      
      swal({
        title: `Game Over`,
        text: "Oops you lost the game....!!!",
        text: "Your Score is " + score,
        imageUrl:
          "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
        imageSize: "100x100",
        confirmButtonText: "Thanks For Playing"
      });
    }
  
}