var balls = [];
var balls2 = [];
function setup() {
  // createCanvas(600, 600);
  var myCanvas = createCanvas(600, 600);
  myCanvas.parent('p5Canvas');
  background(220);
  noStroke();
  fill(241,95,95);
  ellipse(300,300,505);
}


function draw() {

background(50,50,50,20)


  for (var i=0; i<balls.length; i++) {
    balls[i].move();
    balls[i].show();
 }
  for (var i=0; i<balls2.length; i++) {
    balls2[i].move();
    balls2[i].show();
  }
}

function mouseClicked() {
  var b = new Ball();
  b.pos.x = 500;
  b.pos.y = random(150,300);
  balls.push(b);

  var s = new Ball2();
  s.pos.x = 500;
  s.pos.y = random(150,300);
  balls.push(s);

}


function Ball() {
  this.pos = createVector(random(0,200), random(0,200));

  this.vel = createVector(3, 3);
  this.acc = createVector(0, 0);

  this.w = random(5, 30);
  this.c = color(0,random(51,216),random(100,255));
this.w2=(random(10,20))

  this.show = function() {

    noStroke();
    fill(this.c)
    ellipse(this.pos.x, this.pos.y, this.w);


    ellipse(this.pos.y, this.pos.x, this.w);
    fill(200,200,200);

    ellipse(this.pos.y,this.pos.x,this.w2);


  }

  this.move = function() {
    var mouse = createVector(300, 300);
    var dir = p5.Vector.sub(mouse, this.pos);


    dir.normalize();

    dir.mult(random(0.3,0.5));

    this.acc = dir;

    this.vel.add(this.acc);
    this.pos.add(this.vel);

  }

  this.bounce = function() {
    if (this.pos.x <= 0|| width <= this.pos.x) {
      this.vel.x = this.vel.x * -1;
    }

    if (this.pos.y <= 0 || height <= this.pos.y) {
      this.vel.y = this.vel.y * -2;
    }


  }
}
function Ball2() {
  this.pos = createVector(random(0,400), random(0,100));

  this.vel = createVector(3, 3);
  this.acc = createVector(0, 0);

  this.w = random(5, 30);
  this.c = color(0,random(51,216),random(100,255));
this.w2=(random(10,20))

  this.show = function() {

    noStroke();
    fill(this.c)

    fill(159,201,69);

    ellipse(this.pos.y,this.pos.x,this.w2);


  }

  this.move = function() {
    var mouse = createVector(300, 300);
    var dir = p5.Vector.sub(mouse, this.pos);


    dir.normalize();

    dir.mult(0.05);

    this.acc = dir;

    this.vel.add(this.acc);
    this.pos.add(this.vel);

  }

  this.bounce = function() {
    if (this.pos.x <= 0|| width <= this.pos.x) {
      this.vel.x = this.vel.x * -2;
    }

    if (this.pos.y <= 0 || height <= this.pos.y) {
      this.vel.y = this.vel.y * -2;
    }


  }
}
