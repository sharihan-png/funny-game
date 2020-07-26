var ball,img,paddle,rand;

function preload() {
  ballImg=loadImage("ball.png");
  paddleImg=loadImage("paddle.png");
  /* preload your images here of the ball and the paddle */
}
function setup() {
  createCanvas(400, 400);
  paddle=createSprite(380,200,10,50);
  paddle.addAnimation("paddlesImages",paddleImg);
  ball=createSprite(200,200)
  ball.addAnimation("ballsImage",ballImg);
  ball.velocityX=9;
  
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  
  /* give the ball an initial velocity of 9 in the X direction */
  

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges=createEdgeSprites();
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  
  if(ball.isTouching(paddle)){
    var rand=random(-5,-9);
   ball.velocityX=rand;
   ball.velocityY=rand; 
 }
  paddle.collide(edges[2]);
  paddle.collide(edges[3]);
  
  
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
   paddle.velocityY=-9 /* what should happen when you press the UP Arrow Key */
  }

  if(keyDown(DOWN_ARROW))
  {
    paddle.velocityY=9/* what should happen when you press the UP Arrow Key */
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

