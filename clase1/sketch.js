var vel;
var pos;
var ancho;
function setup() {
  // put setup code here
  createCanvas(600, 400);
  ancho = 60;
  vel = new p5.Vector(2,2);
  //                  {           x       }{           y          }
  pos = new p5.Vector(width / 2 - ancho / 2,height / 2 - ancho / 2);
}

function draw() {
  // put drawing code here
  background(51);
  fill(255);
  noStroke();
  
  pos.add(vel);
  rect(pos.x, pos.y, ancho, ancho);
  
  //Por los lados
  if(pos.x - ancho/2 >= width){
    pos.x = - ancho;
  } else if(pos.x + ancho <= 0){
    pos.x = width;
  }

  //Por arriiba y abajo
  if(pos.y + ancho <= 0){
    pos.y = height;
  } else if(pos.y - ancho >= height){
    pos.y = -ancho;
  }

}

function keyPressed(){
  if(keyCode == UP_ARROW){
    vel.x = 0;
    vel.y = -2;
  } else if(keyCode == DOWN_ARROW){
    vel.x = 0;
    vel.y = 2;
  } else if(keyCode == LEFT_ARROW){
    vel.x = -2;
    vel.y = 0;
  } else if(keyCode == RIGHT_ARROW){
    vel.x = 2;
    vel.y = 0;
  }
}