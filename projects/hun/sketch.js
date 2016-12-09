var ball;
var balls = [];

function setup() {
  // createCanvas(300, 300);
  var myCanvas = createCanvas(700, 700);
  myCanvas.parent('p5Canvas');
  background(220);

  // ball = new Ball();
}

function draw() {
  background(240);

  for (var i=0; i<balls.length; i++) {
    balls[i].move();
    balls[i].bounce();
    balls[i].show();
  }
}

function mouseClicked() {
  var ball = new Ball();
  ball.setPosition(mouseX, mouseY);
  balls.push(ball);
}


function Ball() {
  this.pos = createVector(width/2, height/2);
  this.vel = createVector(random(-1, 1), random(-1, 1));
  this.d = random(5, 30);


  this.show = function() {
    noStroke();
    fill(random(255),0,random(255));
    ellipse(this.pos.x+random(5,30), this.pos.y+random(5,30), this.d);
    // fill(0);
    // ellipse(this.pos.x + random(-3, 3), this.pos.y + random(-3, 3), this.d-10);
    // ellipse(this.pos.x + 20, this.pos.y, this.d-10);
    for (var i=0; i<balls.length; i++) {
      ellipse(this.pos.x + random(5,30), this.pos.y + random(5,30) , this.d);
  }
  }


  this.move = function() {
    this.pos.add(this.vel);
  }


  this.bounce = function() {
    if (this.pos.x < 0 || width < this.pos.x) {
      this.vel.x = this.vel.x * -1;
    }
    if (this.pos.y < 0 || height < this.pos.y) {
      this.vel.y = this.vel.y * -1;
    }
  }

  this.setPosition = function(x, y) {
    this.pos.x = x ;
    this.pos.y = y ;
  }
}
