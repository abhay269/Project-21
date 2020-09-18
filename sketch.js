//declaring the variable
var wall, thickness;
var bullet, speed, weight;

//creating setup function
function setup() {

  //creating the canvas and sprites
  createCanvas(1600, 400);
  
  bullet = createSprite(50, 200, 20, 20);
  bullet.shapeColor = "white";

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = (80,80,80);

  //giving random numbers to thickness, speed, weight
  thickness = random(22, 83);
  speed = random(223, 321);
  weight = random(30, 52);

  
}

//creating draw function
function draw() {

  //fill the background
  background("blue");
  
  //giving speed to bullet
  bullet.velocityX = speed;

  //giving condition when has collided function occured
  if(hasCollided(bullet, wall)) {

    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

    if(damage > 10) {

       wall.shapeColor = color(255,0,0);

    }
    
    if(damage < 10) {

      wall.shapeColor = color(0,255,0);

    }

}

  //draw the sprites
  drawSprites();

}

 //creating has collided function
 function hasCollided(lbullet, lwall){

  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;

  if(bulletRightEdge >= wallLeftEdge){

      return true

  }  

  return false;

 
}