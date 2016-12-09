var balls = [];
var string = "****BLESS****"
var n = 0;
var img;
var imgg;

function setup() {
    // createCanvas(586,463);
    var myCanvas = createCanvas(586, 463);
    myCanvas.parent('p5Canvas');

  loadImage("/SIA2016NoC/projects/crunky_code/back.jpg",
   function(img) {
    image(img, 0, 0);
  });
  img = loadImage("/SIA2016NoC/projects/crunky_code/back.jpg");
  textAlign(CENTER, CENTER);

}

function draw() {

  textAlign(CENTER, CENTER);
    image(img, 0, 0);


    loadImage("/SIA2016NoC/projects/crunky_code/window.png", function(imgg) {
      image(imgg, 0, 0);
    });

  for (var i=0; i<balls.length; i++) {
    balls[i].show();
    balls[i].move();
    balls[i].bounce();
  }
}


function mouseClicked() {
  balls.push(new Ball(mouseX, mouseY, string[n]));
  n = n + 1;
  if (n >= string.length) n = 0;
}
function Ball(mx, my, w) {
  this.pos = createVector(mx, my);
  this.vel = createVector(random(-1, 1), random(-1, 1));
  this.acc = createVector(0, 0.1);
  this.d = 20;
  this.word = w;
  this.turn = 0;
  this.tVel = 0;
  this.c = color(random(0,250), random(0,250),random(0,250));


  this.show = function() {
    textSize(this.d);
    fill(this.c);
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.turn);
    text(this.word, 0, 0);
    pop();
  }


  this.move = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.turn = this.turn + this.tVel;
  }




  this.bounce = function() {
    if (this.pos.x < width || width < this.pos.x) {
      this.vel.x = this.vel.x * -1;
    }
    if (403 < 0 || 403 < this.pos.y) {
      this.vel.y = this.vel.y * -0.6;
      this.tVel = random(-0.1, 0.1);
      this.pos.y = 403;
    }
  }

}
