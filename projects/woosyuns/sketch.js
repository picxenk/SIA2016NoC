var balls = [];
var string = "♬♯♬♫♬♩♮♩♩"
var n = 0;




function setup() {
  // createCanvas(500, 500);
  var myCanvas = createCanvas(500, 500);
  myCanvas.parent('p5Canvas');
  background(130,100,0);
  textAlign(mouseX, mouseY);
  // sound.setVolume(0.1);
  //  sound.play();
}






// function preload() {
//   sound = loadSound('laught.mp3');
// }


function draw() {
  background(205,255,0,40);
  ellipse(mouseX,mouseY,50);
  rect(mouseX,mouseY-12,75,24);
fill(random(255),random(255),random(255))
  noStroke();
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
  this.vel = createVector(random(-3, 3), random(-3, 3));
  this.acc = createVector(0, 0.1);
  this.d = 60;
  this.word = w;
  this.turn = 0;
  this.tVel = 0;
  this.c = color(random(100,255),random(100,255), random(80, 200));








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
    if (this.pos.x < 0 || width < this.pos.x) {
      this.vel.x = this.vel.x * -1;
    }
    if (this.pos.y < 0 || height < this.pos.y) {
      this.vel.y = this.vel.y * -0.85;
      this.tVel = random(-0.1, 0.1);
      this.pos.y = height;
    }
  }




}
