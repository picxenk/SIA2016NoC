var balls = [];
var mainball;

function setup() {
  // createCanvas(700, 700);
  var myCanvas = createCanvas(700, 700);
  myCanvas.parent('p5Canvas');
  background(220);
  window.mainball = new Mainball();
}


function draw() {
  background(220);

  window.mainball.show();

  for (var i=0; i<balls.length; i++) {
    balls[i].move();
    balls[i].show();
    balls[i].disappear();
  }

  if (mainball.mainballsize > 400 && mainball.mainballsize < 800) {
      mainball.pos = createVector(width/2, height);
      text("SHOT!", width/2, height/2);
      textSize(100);
      textAlign(CENTER);
      fill(0, 102, 153, 51);
    }
}

function Mainball() {
  this.pos = createVector(width/2, height/2);
  this.mainballsize = random(10,20);
  this.mainballcolor = color(100);

  this.show = function() {
    ellipse(this.pos.x, this.pos.y, this.mainballsize);
    fill(this.mainballcolor);
    noStroke();
  }

  this.sizeUp = function(radius) {
    this.mainballsize = this.mainballsize + radius;
  }
}

function mouseClicked() {
  var b = new Ball();
  b.pos.x = random(width);
  b.pos.y = random(height);
  b.posDiff = createVector(random(-width/2, width/2), random(-height/2, height/2));
  balls.push(b);
}


function Ball() {
  this.pos = createVector(width/2, height/2);
  this.vel = createVector(0, 0);
  this.visible = true;

  this.w = random(5, 30);
  this.c = color(random(0, 100), random(10, 100));


  this.show = function() {
    if (this.visible) {
      fill(this.c);
      noStroke();
      ellipse(this.pos.x, this.pos.y, this.w);
    }
  }


  this.move = function() {
    var center = createVector(width/2, height/2);

    this.vel = p5.Vector.sub(center, this.pos);
    this.vel.normalize();

    this.pos.add(this.vel);
  }

    this.disappear = function() {
      if (dist(this.pos.x, this.pos.y, width/2, height/2) < 1) {
        this.visible = false;
        mainball.sizeUp(this.w);
        for(var i=0;i<balls.length; i++) {
            if(balls[i] == this) {
              balls.splice(i,1);
              break;
            }
        }
      }
    }
}
