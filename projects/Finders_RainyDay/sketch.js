var imgFront;
var imgLeft;
var imgRight;

function preload() {
  imgFront = loadImage("Front.png");
  imgLeft = loadImage("Left.png");
  imgRight = loadImage("Right.png");
}

var kid;
var cloud;
var drops = [];
var dropsNumber = 50;

function setup() {
  var myCanvas = createCanvas(640, 360);
  myCanvas.parent('p5Canvas');

  kid = new Kid();
  cloud = new Cloud();

  for (var i = 0; i < dropsNumber; i++) {
    drops[i] = new Drop();
  }
}

function draw() {
  background(100, 100, 100);

  kid.showKid();
  cloud.updateCloud();
  cloud.moveCloud();
  cloud.showCloud();

  for (var i = 0; i < drops.length; i++) {
    drops[i].updateRangeBox();
    drops[i].moveRangeBox();
    drops[i].fallDrop();
    drops[i].showDrop();
  }

}


  /////////////////////////////////////////////////////////


//Kid
function Kid() {
  //Kid - showKid
  this.Kpos = createVector(mouseX, height-60);
  this.Kw = 80;
  this.Kh = 120; //moveCloud, moveRangeBox

  //showKid method
  this.showKid = function() {
    //constrain mouseX
    //Cloud.Cw/2 = 100
    var conMouseX = constrain(mouseX, 100, width - 100);

    push();
    noStroke();
    if (pmouseX < mouseX) {
      //Right
      imageMode(CENTER);
      image(imgRight,conMouseX, this.Kpos.y, this.Kw, this.Kh);

    } else if (pmouseX > mouseX) {
      //Left
      imageMode(CENTER);
      image(imgLeft,conMouseX, this.Kpos.y, this.Kw, this.Kh);

    } else {
      //Front
      imageMode(CENTER);
      image(imgFront,conMouseX, this.Kpos.y, this.Kw, this.Kh);

    }

    //fill(255, 200, 0); //rect color
    pop();
    }
}


//Cloud
function Cloud() {
  //Cloud - updateCloud, moveCloud, showCloud
  this.Cpos = createVector(width/2, height/3);
  this.Cvel = createVector(0,0);
  this.Cacc = createVector(0,0);
  this.Cw = 200; //showKid
  this.Ch = 60;

  //updateCloud method
  this.updateCloud = function() {
    this.Cvel.add(this.Cacc);
    this.Cpos.add(this.Cvel);
    this.Cacc.mult(0);
    this.Cvel.mult(0.95);
  }

  //moveCloud method
  this.moveCloud = function() {
    //constrain mouseX, mouseY
    //Kid.Kh = 120
    var conMouseX = constrain(mouseX, this.Cw/2, width - this.Cw/2);
    var conMouseY = constrain(mouseY, this.Ch/2, height - 120 - this.Ch/2 - 10);

    var mouse = createVector(conMouseX, conMouseY);
    var dir = p5.Vector.sub(mouse, this.Cpos);

    dir.normalize();
    dir.mult(0.01);
    this.Cacc = dir;
    this.Cvel.add(this.Cacc);
    this.Cpos.add(this.Cvel);
  }

  //showCloud method
  this.showCloud = function() {
    push();
    fill(color(255));
    noStroke();
    ellipse(this.Cpos.x, this.Cpos.y, this.Cw, this.Ch);
    pop();
  }
}


//Drop
function Drop() {
  //rangeBox - updateRangeBox, moveRangeBox
  //rangeBox is invisible Cloud.
  this.Rpos = createVector(width/2, height/3);
  this.Rvel = createVector(0,0);
  this.Racc = createVector(0,0);
  this.Rw = 200;
  this.Rh = 60;

  //Drop - fallDrop, showDrop
  this.Dpos = createVector(random(this.Rpos.x - this.Rw/3, this.Rpos.x + this.Rw/3), random(this.Rpos.y, this.Rpos.y + this.Rh/3));
  this.Dz = random(0, 20);
  this.Dlen = map(this.Dz, 0, 20, 10, 20);
  this.Dyspeed = map(this.Dz, 0, 20, 1, 20);


  //updateRangeBox method
  this.updateRangeBox = function() {
    this.Rvel.add(this.Racc);
    this.Rpos.add(this.Rvel);
    this.Racc.mult(0);
    this.Rvel.mult(0.95);
  }

  //moveRangeBox method
  this.moveRangeBox = function(){
    //constrain mouseX, mouseY
    //Kid.Kh = 120
    var conMouseX = constrain(mouseX, this.Rw/2, width - this.Rw/2);
    var conMouseY = constrain(mouseY, this.Rh/2, height - 120 - this.Rh/2 - 10);

    var mouse = createVector(conMouseX, conMouseY);
    var dir = p5.Vector.sub(mouse, this.Rpos);

    dir.normalize();
    dir.mult(0.01);
    this.Racc = dir;
    this.Rvel.add(this.Racc);
    this.Rpos.add(this.Rvel);
  }

  //fallDrop method
  this.fallDrop = function() {
    this.Dpos.y = this.Dpos.y + this.Dyspeed;
    var grav = map(this.Dz, 0, 20, 0, 0.1);
    this.Dyspeed = this.Dyspeed + grav;

    if (this.Dpos.y > height) {
      this.Dpos.x = random(this.Rpos.x - this.Rw/3, this.Rpos.x + this.Rw/3);
      this.Dpos.y = random(this.Rpos.y, this.Rpos.y + this.Rh/3);
      this.Dyspeed = map(this.Dz, 0, 20, 1, 10);
    }
  }

  //showDrop method
  this.showDrop = function() {
    push();
    var thick = map(this.Dz, 0, 20, 1, 3);
    strokeWeight(thick);
    stroke(0, 200, 300);
    line(this.Dpos.x, this.Dpos.y, this.Dpos.x, this.Dpos.y + this.Dlen);
    pop();
  }
}
