var ball;
var balls = [];

function setup() {
  // createCanvas(1200, 1200);
  var myCanvas = createCanvas(700, 700);
  myCanvas.parent('p5Canvas');
  background(5);

  // ball = new Ball();
}

function draw() {
  background(140);


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
  this.vel = createVector(random(-3, 12), random(-3, 12));
  this.d = random(15, 120);


  this.show = function() {
    ellipse(this.pos.x, this.pos.y, this.d);
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
    this.pos.x = x;
    this.pos.y = y;
  }

}
