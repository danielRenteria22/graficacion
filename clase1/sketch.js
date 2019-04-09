var velX;
var velY;
var x,y;
var ancho;
function setup() {
  // put setup code here
  createCanvas(600, 400);
  velX = 2;
  velY = 0;
  ancho = 30;
  x = width / 2 - ancho / 2;
  y = height / 2 - ancho / 2;
    
}

function draw() {
  // put drawing code here
  background(51);
  fill(255);
  noStroke();
  x += velX;
  y += velY;
  rect(x, y, ancho, ancho);

  if(x - ancho/2 >= width){
    x = 0;
  }

}