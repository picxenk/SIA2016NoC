var light;

var lights=[];
function setup() {
// createCanvas(1280,640);
var myCanvas = createCanvas(700, 700);
myCanvas.parent('p5Canvas');
light = new Light(width/2,height/2,16);
  var x =random(-width*2,width*2);
  var y =random(-height*2,height*2);
for (var i =0; i<250;i++){
lights[i] = new Light(random(width),random(height),random(5,15));
  }
}

function draw() {
  background(20);
  translate(width/2-light.pos.x,height/2-light.pos.y)
  light.show();
  light.showshow();
  light.update();
  light.score();


  for (var i=0; i<lights.length; i++){
    // blobs[i] = new Blob(random(width),random(height),random(5,15));
    lights[i].show();
    lights[i].move();
    if (light.join(lights[i])){
      lights.splice(i,1);
    }
  }
    if(light.m>=240){
      light.ptext();
    }
}
function Light(x,y,m){
  this.pos = createVector(x,y);
  this.vel = createVector(random(-1, 1), random(-1, 1));
  this.m=m;

  this.move = function() {
    this.pos.add(this.vel);
  }

  this.update = function(){
    var vel = createVector(mouseX-width/2,mouseY-height/2);
    // vel.sub(this.pos);
    vel.setMag(3);
    this.pos.add(vel);
  }
  this.join = function(other){
    var d = p5.Vector.dist(this.pos,other.pos);
    if(d< this.m + other.m){
      this.m += other.m*0.15;
      return true;
    }else{
      // return false;
    }
  }


  this.show = function(){
    noStroke();
    fill(255,random(150),25);
    ellipse(this.pos.x, this.pos.y,this.m*2,this.m*2);
  }
  this.showshow= function(){
    noStroke();
    fill(255,255,150);
    ellipse(this.pos.x,this.pos.y,this.m*2-20,this.m*2-20);
}
    this.ptext= function(){
      fill(255,0,0);
      textSize(72);
      textAlign(CENTER);
      textStyle(BOLD);
      text("큰 불",light.pos.x,light.pos.y);
    }
    this.score = function(){
      fill(255,0,0);
      textSize(24);
      textAlign(RIGHT);
      textStyle(BOLD);
      text(light.m,light.pos.x+width/2,light.pos.y+height/2);
    }
}
