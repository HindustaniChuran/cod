var car,wall
var speed,weight



function setup() {
  createCanvas(1600,400);
 // createSprite(400, 200, 50, 50);
  wall= createSprite(1000,200,20,height/2)
 car=createSprite(50,200,20,10)
  speed=random(100,300)
 weight=random (30,52)

 
}

function draw() {
  background("white");  
  wall.shapeColor=color(80,80,80)

if(car.x-wall.x < (wall.width+car.width)/2)
{  
  wall.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509
  if(deformation>52)



{
  wall.shapeColor=color(255,0,0)
}




if(deformation<50)
{
  wall.shapeColor=color(0,255,0)
  
}
}
car.velocityX = speed;

if(car.isTouching(wall)) {
  car.velocityX = 0
}












 drawSprites()
}















