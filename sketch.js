let x1, y1, x2, y2;
let change1 = 0;
let change2;
let x1speed = 2;
let y1speed = -1.25;
let x2speed = 1;
let y2speed = -0.75;

function setup() {
  createCanvas(windowHeight, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  background(0);
  x1 = 0;
  y1 = height;
  x2 = 30;
  y2 = height-30;
  change2 = change1 + 180;

  
}

function draw() {
  //strokeWeight(3);
  background(0, 0.1);
  //background(change2, 100, 100, 0.5);
  noStroke();
  fill(255);
  ellipse(x1, y1, 10);
  //fill(change1, 100, 100, 10);
  //ellipse(x2, y2, random(100));
  fill(change1, random(100), random(100));
  for (let i = 0; i < 4; i++)
    ellipse(x2 + random(-50, 50), y2 + random(-50, 50), 5);
  x1 += x1speed;
  y1 += y1speed;
  parameters2();
  
  // if (x2 > width*.1){
    x2 += random(-1, 5) * x2speed;
     y2 += random(-1, 5) * y2speed;
//  } else {
//      x2 += random(-1, 5) * x2speed;
//      y2 += random(-5, 1) * y2speed;
//  }

 if (change1 > 360){
  change1 = 0;
}

if (change1 < 180){
change2 = change1 + 180;
  } else {
    change2 = change1 - 180;
  }
  
}

function parameters1(){

 if (x1 >= width || x1 <= 0 ){
   //background(10, 10);
   x1 *= 0;
   y1 = random(height)
 }
 if (y1 < 0){
   //background(10, 10);
   x1 = 0;
   y1 = random(height);
 }

 if (x2 >= width){
   //background(10, 10);
   x2 = 0;
   y2 = random(height);
   change1 += 10;
 }
 if (y2 < 0){
  // background(10, 10);
   x2 = 0;
   y2 = random(height);
   change1 += 10;
 }



}

function parameters2(){
  if ((x1 > width) || (x1 < 0)){
    x1speed *= -1;
    background(change2, 50, 100, 25);
    //change2 = random(1, 255);
  }
  if ((y1 > height) || (y1 < 0)){
    background(change2, 50, 100, 25);
    y1speed *= -1;
  }

  if ((x2 > width-30) || x2 < 30){
    //background(10, 10);
    x2speed *= -1;
    change1 += 10;
  }
  if ((y2 < 30) || (y2 > height-30)){
   // background(10, 10);
    y2speed *= -1;
    change1 += 10;
  }
}

function mousePressed(){
 x2 = mouseX;
 y2 = mouseY; 
}

function keyPressed(){
  let fs = fullscreen();
  fullscreen(!fs);
}