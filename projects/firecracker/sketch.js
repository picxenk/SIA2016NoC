var offsetAngle =0,
    particle,
    particles =[];



function setup(){

  colorMode(HSB, 100);
  blendMode(ADD);
  noStroke();


 }


function draw() {
  clear();
  // createCanvas(windowWidth, windowHeight);
  var myCanvas = createCanvas(700, 700);
  myCanvas.parent('p5Canvas');
  background(0,0,0);

  offsetAngle += 0.05;

  triangle(mouseX-60,mouseY-60,mouseX,mouseY,mouseX-90,mouseY);
  fill(255);

  if (mouseIsPressed) {
  if (touchX > 0 && touchY > 0) {
    makeParticles(2, touchX, touchY);
  } else {
    makeParticles(2, width/2, height/2)
  }
    for (i=0; i<particles.length; i++) {
    var p = particles[i];
    p.render();
    p.update();
  }

	while(particles.length> 1000) particles.shift();
}
}


function makeParticles(pcount, mx, my) {
 for(var i=0; i<pcount;i++) {
   var p = new Particle(mx, my, random(35,95));

   var angle = PI + random(0,PI);
   var speed = random(8,20);

   p.velX = sin(angle)*speed;
   p.velY = cos(angle)*speed;

   p.size = random(8,18);

   particles.push(p);
 }
}

function Particle(x,y,h) {
  this.posX = x-80;
	this.posY = y-28;
	this.velX = 0;
	this.velY = 0;
	this.shrink = .95;
	this.size = 1;
	this.drag = 0.9;
	this.gravity = 0.2;
  this.hue = h;

   this.update = function() {
     this.velX *= this.drag;
     this.velY *= this.drag;

     this.velY += this.gravity/2;

     this.posX += this.velX;
     this.posY += this.velY;

     this.size *= this.shrink;
    };

    this.render = function() {
      fill(this.hue, 100, 100);
      ellipse(this.posX, this.posY, this.size);
	};


}
