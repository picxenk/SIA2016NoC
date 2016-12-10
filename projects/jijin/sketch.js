window.onload = function(){
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext("2d");

  var mouseX, mouseY, mousedown = false;

  var fireworks = [], particles= [], color = 120;

  var limiterTotal = 5,
  limiterTick = 0,
  timerTotal = 80,
  timerTick = 0;

  var width = window.innerWidth;
  var height = window.innerHeight;
  setupCanvas();

  var ship = new Ship();

  function Ship(){
    this.ship = new Image();
    this.ship.src = '/SIA2016NoC/projects/jijin/1204.png';

    this.x = width/2;
    //TODO 배 위치 == 수면 1)
    this.y = height/2;
    this.width = width/8;
    this.height = height/4;

    ctx.drawImage(this.ship, this.x, this.y, this.width, this.height);
  }

  Ship.prototype.update = function(x){
    //TODO 이전 배 그림 제거 코드 추가
    ctx.beginPath();
    ctx.fillStyle ='black';
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fill();

    this.x = x;
    ctx.drawImage(this.ship, this.x, this.y, this.width, this.height);
  }

  function setupCanvas(){
    canvas.width = width;
    canvas.height = height;

    ctx.fillRect(0, 0, width, height);

    ctx.beginPath();
    //TODO 배위치 == 수면 2)
    ctx.rect(0, height *0.75, width, height/3);
    ctx.fillStyle = "indigo";
    ctx.fill();
  }

  function random(min, max){
    return Math.random() * (max - min) + min;
  }

  function calculateDistance( p1x, p1y, p2x, p2y ) {
   var xDistance = p1x - p2x,
     yDistance = p1y - p2y;
   return Math.sqrt( Math.pow( xDistance, 2 ) + Math.pow( yDistance, 2 ) );
  }

  function Firework(sx, sy, tx, ty){
    this.x = sx;
    this.y = sy;

    this.sx = sx;
    this.sy = sy;

    this.tx = tx;
    this.ty = ty;

    this.distanceToTarget = calculateDistance( sx, sy, tx, ty );
    this.distanceTraveled = 0;

    this.coordinates = [];
    this.coordinateCount = 3;

    while( this.coordinateCount-- ) {
     this.coordinates.push( [ this.x, this.y ] );
    }

    this.angle = Math.atan2( ty - sy, tx - sx );
    this.speed = 2;
    this.acceleration = random(1,2);
    this.brightness = random( 50, 70 );
    // circle target indicator radius
    this.targetRadius = 1;
  }

  Firework.prototype.update = function( index ) {

   this.coordinates.pop();

   this.coordinates.unshift( [ this.x, this.y ] );

   if( this.targetRadius < 8 ) {
    this.targetRadius += 0.3;
   }
   else {
    this.targetRadius = 1;
   }

   this.speed *= this.acceleration;

   var vx = Math.cos( this.angle ) * this.speed,
     vy = Math.sin( this.angle ) * this.speed;

   this.distanceTraveled = calculateDistance( this.sx, this.sy, this.x + vx, this.y + vy );

   if( this.distanceTraveled >= this.distanceToTarget ) {
    createParticles( this.tx, this.ty );

    fireworks.splice( index, 1 );
   }
   else {
    this.x += vx;
    this.y += vy;
   }
  }

  Firework.prototype.draw = function(){
    ctx.beginPath();
    // move to the last tracked coordinate in the set, then draw a line to the current x and y
    ctx.moveTo( this.coordinates[ this.coordinates.length - 1][ 0 ], this.coordinates[ this.coordinates.length - 1][ 1 ] );
    ctx.lineTo( this.x, this.y );
    ctx.strokeStyle = 'hsl(' + color + ', 100%, ' + this.brightness + '%)';
    ctx.stroke();

    ctx.beginPath();
    // draw the target for this firework with a pulsing circle
    ctx.arc( this.tx, this.ty, this.targetRadius, 0, Math.PI * 2 );
    ctx.stroke();
   }

  function Particle(x, y){
    this.x = x;
    this.y = y;

    this.coordinates = [];
    this.coordinatesCount =5;
    while(this.coordinatesCount--){
      this.coordinates.push([this.x, this.y]);
    }

    this.angle = random(0, Math.PI * 2);
    this.speed = random(1, 10);

    this.friction = 0.95;

    this.gravity = 1;

    this.color = random(color - 50, color + 50);
    this.brightness = random(50, 80);
    this.alpha = 1;

    this.decay = random(0.015, 0.03);
  }

  Particle.prototype.update = function (index){
    // remove last item in coordinates array
    this.coordinates.pop();
    // add current coordinates to the start of the array
    this.coordinates.unshift( [ this.x, this.y ] );
    // slow down the particle
    this.speed *= this.friction;
    // apply velocity
    this.x += Math.cos( this.angle ) * this.speed;
    this.y += Math.sin( this.angle ) * this.speed + this.gravity;
    // fade out the particle
    this.alpha -= this.decay;

    // remove the particle once the alpha is low enough, based on the passed in index
    if( this.alpha <= this.decay ) {
     particles.splice( index, 1 );
    }
  }

  // draw particle
  Particle.prototype.draw = function() {
   ctx. beginPath();
   // move to the last tracked coordinates in the set, then draw a line to the current x and y
   ctx.moveTo( this.coordinates[ this.coordinates.length - 1 ][ 0 ], this.coordinates[ this.coordinates.length - 1 ][ 1 ] );
   ctx.lineTo( this.x, this.y );
   ctx.strokeStyle = 'hsla(' + this.color + ', 100%, ' + this.brightness + '%, ' + this.alpha + ')';
   ctx.stroke();
  }

  function createParticles( x, y ) {
   // increase the particle count for a bigger explosion, beware of the canvas performance hit with the increased particles though
   var particleCount = 30;
   while( particleCount-- ) {
    particles.push( new Particle( x, y ) );
   }
  }

  setInterval(function(){
    color = random(0, 360);

    var fireworkLength =fireworks.length;
    while(fireworkLength--){
      //fireworks[fireworkLength].draw();
      fireworks[fireworkLength].update(fireworkLength);
    }

    var particleLength =particles.length;
    while(particleLength--){
      particles[particleLength].draw();
      particles[particleLength].update(particleLength);
    }

    if(limiterTick >= limiterTotal){
      if(mousedown){
        fireworks.push(new Firework(width / 2, hegiht, mouseX, mouseY ));
        limiterTick =0;
      }
      else{
        limiterTick++;
      }
    }
  }, 50);

  //TODO 점점 어두워지는 화면 set
  setInterval(function(){
    ctx.globalCompositeOperation ='destinatiou-out';

    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect( 0, 0, width, height *0.75 );

  }, 2000);

  canvas.addEventListener('mousemove', function(e){
    mouseX = e.pageX - canvas.offsetLeft;
    mouseY = e.pageY - canvas.offsetTop;

    ship.update(mouseX);
  });

  canvas.addEventListener('mousedown', function(e){
    e.preventDefault();

    mousedown=true;
    var firework
      = new Firework(ship.x + ship.width/2, ship.y + ship.height, e.pageX, e.pageY);
    fireworks.push(firework);

    firework.draw();
  });

  canvas.addEventListener('mouseup', function(e){
    e.preventDefault();

    mousedown = false;
  });
};
