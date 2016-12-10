var balls = [];

function setup() {
  // createCanvas(500, 300);
  var myCanvas = createCanvas(500, 300);
  myCanvas.parent('p5Canvas');
  background(220);
}


function draw() {
  background(220);

  for (var i=0; i<balls.length; i++) {
    balls[i].move();
    balls[i].show();
    var mouse = createVector(mouseX, mouseY);

    // Draw an ellipse at the mouse position
    fill(215);
    stroke(00);
    strokeWeight(2);
    arc(mouse.x, mouse.y, 80, 80, 62, PI+QUARTER_PI, OPEN);

  }
}


function mouseClicked() {
  var b = new Ball();
  b.pos.x = random(width);
  b.pos.y = random(height);
  balls.push(b);
}


function Ball() {
  this.pos = createVector(width/2, height/2);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);

  this.w = random(5, 30);
  this.c = color(random(0, 100), random(10, 100));


  this.show = function() {
    fill(this.c);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.w);
  }


  this.move = function() {
    var mouse = createVector(250,305);
    var dir = p5.Vector.sub(mouse, this.pos);

    dir.normalize();

    dir.mult(0.9);

    this.acc = dir;

    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }


  this.bounce = function() {
    if (this.pos.x <= 100 || width <= this.pos.x) {
      this.vel.x = this.vel.x * -5;
    }

    if (this.pos.y <= 1 || height <= this.pos.y) {
      this.vel.y = this.vel.y * -5;
    }

  }
}
