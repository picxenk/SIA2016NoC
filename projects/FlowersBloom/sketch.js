var circleLine;
var lineNumber;
var sun;
var r = 50;
var a = 0;

var planet1;
var planet2;
var planet3;
var planet4;
var planet5;
var planet6;
var planet7;
var planet8;
var planet9;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  frameRate(24.95);
  circleLine = new CircleLine();
  lineNumber = 0;
  sun = new Sun();
  planet1 = new Planet1();
  planet2 = new Planet2();
  planet3 = new Planet3();
  planet4 = new Planet4();
  planet5 = new Planet5();
  planet6 = new Planet6();
  planet7 = new Planet7();
  planet8 = new Planet8();
  planet9 = new Planet9();

  }

function draw(){
  background(255);

  planet9.show();
  planet8.show();
  planet7.show();
  planet6.show();
  planet5.show();
  planet4.show();
  planet3.show();
  planet2.show();
  planet1.show();
  circleLine.show();
  sun.show();
}
function Planet1() {
  this.show = function(){

  fill(18,63,147);

  var x1 = 0.5*r * cos(a);
  var y1 = 0.5*r * sin(a);

  a += 0.1;
  r += 0;

  push();
  translate(width/2, height/2);
  strokeWeight(2);
  stroke(18,63,147);
  ellipse(x1, y1, random(5, 25));
  pop();

}
}

function Planet2() {
  this.show = function(){

  fill(60,177,54);

  var x2 = 1*r * cos(a);
  var y2 = 1*r * sin(a);

  a += 0.09;
  r += 0;

  push();
  translate(width/2, height/2);
  strokeWeight(2);
  stroke(60,177,54);
  ellipse(x2, y2, random(5, 25));
  pop();

}
}

function Planet3() {
  this.show = function(){

  fill(245,96,54);

  var x3 = 1.5*r * cos(a);
  var y3 = 1.5*r * sin(a);

  a += 0.08;
  r += 0;

  push();
  translate(width/2, height/2);
  strokeWeight(2);
  stroke(245,96,54);
  ellipse(x3, y3, random(5, 25));
  pop();

}
}

function Planet4() {
  this.show = function(){

  fill(52,114,206);

  var x4 = 2*r * cos(a);
  var y4 = 2*r * sin(a);

  a += 0.07;
  r += 0;

  push();
  translate(width/2, height/2);
  strokeWeight(2);
  stroke(52,114,206);
  ellipse(x4, y4, random(5, 25));
  pop();

}
}

function Planet5() {
  this.show = function(){

  fill(135,63,177);

  var x5 = 2.5*r * cos(a);
  var y5 = 2.5*r * sin(a);

  a += 0.06;
  r += 0;

  push();
  translate(width/2, height/2);
  strokeWeight(2);
  stroke(135,63,177);
  ellipse(x5, y5, random(5, 25));
  pop();

}
}

function Planet6() {
  this.show = function(){

  fill(151, 78, 26);

  var x6 = 3*r * cos(a);
  var y6 = 3*r * sin(a);

  a += 0.04;
  r += 0;

  push();
  translate(width/2, height/2);
  strokeWeight(2);
  stroke(151, 78, 26);
  ellipse(x6, y6, random(5, 25));
  pop();

}
}

function Planet7() {
  this.show = function(){

  fill(96,108,17);

  var x7 = 3.5*r * cos(a);
  var y7 = 3.5*r * sin(a);

  a += 0.03;
  r += 0;

  push();
  translate(width/2, height/2);
  strokeWeight(2);
  stroke(96,108,17);
  ellipse(x7, y7, random(5, 25));
  pop();

}
}

function Planet8() {
  this.show = function(){

  fill(226,36,110);

  var x8 = 4*r * cos(a);
  var y8 = 4*r * sin(a);

  a += 0.02;
  r += 0;

  push();
  translate(width/2, height/2);
  strokeWeight(2);
  stroke(226,36,110);
  ellipse(x8, y8, random(5, 25));
  pop();

}
}

function Planet9() {
  this.show = function(){

  fill(188,156,46);

 var x9 = 4.5*r * cos(a);
  var y9 = 4.5*r * sin(a);

  a += 0.01;
  r += 0;

  push();
  translate(width/2, height/2);
  strokeWeight(2);
  stroke(188,156,46);
  ellipse(x9, y9, random(5, 25));
  pop();

}
}

function CircleLine() {

this.show = function(){
    stroke(18, 63, 147);
  fill(0, 0, 0, 0);
  ellipse(width/2 ,height/2 ,50*1 ,50*1);
     stroke(60,177,54);
  fill(0, 0, 0, 0);
  ellipse(width/2 ,height/2 ,50*2 ,50*2);
       stroke(245,96,54);
  fill(0, 0, 0, 0);
  ellipse(width/2 ,height/2 ,50*3 ,50*3);
       stroke(52,114,206);
  fill(0, 0, 0, 0);
  ellipse(width/2 ,height/2 ,50*4,50*4);
       stroke(135,63,177);
  fill(0, 0, 0, 0);
  ellipse(width/2 ,height/2 ,50*5 ,50*5);
       stroke(151, 78, 26);
  fill(0, 0, 0, 0);
  ellipse(width/2 ,height/2 ,50*6,50*6);
       stroke(96,108,17);
  fill(0, 0, 0, 0);
  ellipse(width/2 ,height/2 ,50*7,50*7);
       stroke(226,36,110);
  fill(0, 0, 0, 0);
  ellipse(width/2 ,height/2 ,50*8,50*8);
         stroke(188,156,46);
  fill(0, 0, 0, 0);
  ellipse(width/2 ,height/2 ,50*9 ,50*9);
}

}

function Sun(){
  this.show = function(){
  noStroke();
  fill(241,196,15);
  ellipse(width/2, height/2, 20);
}
}
