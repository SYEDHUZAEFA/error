var car,wall;
var weight,speed;



function setup() {
  createCanvas(1500,400);
  

  car =createSprite(50,200,50,50);
  wall =createSprite(1200,200,60,height/2);

  speed=random(55,90);
  weight=random(400,1500);

  car.velocityx=speed;
}

function draw() {
  background("black");  
  
  if(wall.x-car.x< (car.width+wall.width)/2){
 car.velocityX=10;
 var deformation=0.5 * weight * speed * speed/22500;
  if(deformation>180){
  car.shapeColour="red";
}

if(deformation<180 &&deformation>100){
  car.shapeColour="yellow";
}

if(deformation>100){
  car.shapeColour="green";
}
}
  drawSprites();
}