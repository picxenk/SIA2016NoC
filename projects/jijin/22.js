
var ship = new Image();
ship.src = "C:\Users\\12M0901\\Desktop\\p5\\p5-zip\\1204.png";

var shipElement = document.getElementById("#ship");

ship.onload = function(){
  shipElement.src = ship.src;
}

function setup() {
   createCanvas(640,360);
}

function draw() {
  background(50);
}

function Ship(){
  this.pos = createVector(width/2, height/2);
  this.posDiff = createVector(0,0);

  this.move = function(){
    this.pos = createVector(mouseX + this.posDiff.x, mouseY + this.posDiff.y);
  }
}
