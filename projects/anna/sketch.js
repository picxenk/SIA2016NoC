var balls = [];
var string = 'LETTERFORIRIS';
// var irises = [];
// var iris;
var  amplitude;
var n = 0;
var ax;
var ay;
var q;
var p;
var song; var song1; var song2; var song3; var song4; var song5; var song6; var song7; var song8; var song9; var song10;
var noise1;
var amp = 0.01;
function preload() {
  noise1 = loadSound('/SIA2016NoC/master/files/anna/pink.wav');
  song = loadSound('/SIA2016NoC/master/files/anna/metronome.wav');
  song1 = loadSound('/SIA2016NoC/master/files/anna/water_drops_reverb.wav');
  song2 = loadSound('/SIA2016NoC/master/files/anna/bell_1.wav');
  song3 = loadSound('/SIA2016NoC/master/files/anna/bottle_close.wav');
  song4 = loadSound('/SIA2016NoC/master/files/anna/bottle_fill_glass2.wav');
  song5 = loadSound('/SIA2016NoC/master/files/anna/bottle_put_down.wav');
  song6 = loadSound('/SIA2016NoC/master/files/anna/foto_klick_2.wav');
  song7 = loadSound('/SIA2016NoC/master/files/anna/phone_dial.wav');
  song8 = loadSound('/SIA2016NoC/master/files/anna/fx_drop.wav');
  song9 = loadSound('/SIA2016NoC/master/files/anna/switch_1.wav');
  song10 = loadSound('/SIA2016NoC/master/files/anna/water_dripping2.wav');
}

function setup() {
  createCanvas(500, 500);
  amplitude = new p5.Amplitude();
  background(220);
  textAlign(CENTER, CENTER);
  noise1.setVolume(0.1);  song.setVolume(amp);  song1.setVolume(amp);  song2.setVolume(amp);  song3.setVolume(amp);
    song4.setVolume(amp);  song5.setVolume(amp);  song6.setVolume(amp);  song7.setVolume(amp);
        song8.setVolume(amp);  song9.setVolume(amp);  song10.setVolume(amp);
  noise1.play();
  // noise1.loop();
}

function draw() {
  background(220);
  // irises[i].show();
  for (var i=0; i<balls.length; i++) {
    balls[i].show();
    balls[i].move();
    balls[i].bounce();
}

}

function mouseReleased() {
  amp = 0;
}
function mousePressed() {
    noise1.pause();
    amp = 0.1;


}
function keyTyped() {
  // if (key === 'a') {

    balls.push(new Ball(random(500), random(500), string[n]));
    n = n + 1;
    if (n >= string.length) n = 0; }

//   } else if (key === 's') {
//      this.c = color(random(30,30),40,50);
//    }
//    else if (key === 'w') {
//      this.acc = createVector(0,1);
//    }
// }

// function keyTyped() {
//   iris.push(new Iris(0, random(300), random(10,30)));
//   // if (n >= string.length) n = 0;
// }
//
// function mouseClicked() {
//   var irises = new Iris(0, random(300), random(10,30));
//   iris.setPosition(mouseX, mouseY);
//   irises.push(ball);
// }
//
// function Iris(ix,iy,s) {
//   this.pos = createVector(ix,iy);
//   this.vel = createVector(random(-3,3), random(-1,1));
//   this.c = color(random(20),random(20), random(100,250), random(30));
//   this.d = random(5,20);
//
//   this.show = function() {
//     ellipse(this.pos.x,this.pos.y,this.d);
//   }
//
// }


function Ball(mx, my, w) {
  this.pos = createVector(mx, my);
  var q = mouseX / 30;
  var p = mouseY / 20;
  this.vel = createVector(random(-q,q), random(-p,p));
  this.acc = createVector(ax,ay);
  this.d = random(20, 100);
  this.word = w;
  this.turn = 0;
  this.tVel = 0;
  this.c = color(random(100), random(80, 200));



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
    this.pos.x = this.pos.x + random(-1, 1);
    this.pos.y = this.pos.y + random(-1, 1);

    if (mouseIsPressed) {
    // noise1.stop();
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.turn = this.turn + this.tVel;
  }


  }


  this.bounce = function() {
    if (this.pos.x < 0 || width  < this.pos.x) {
      this.vel.x = this.vel.x * -1;
      this.d = this.d - 2;
      amp = amp * 0.01;
      var randomX = random(6);
      if (randomX = 0 ) {
        if (song.isPlaying() ){
            song.pause();
          } else {
            song.play();
          }}
      if (randomX = 1 ) {
        if (song1.isPlaying() ){
            song1.pause();
          } else {
            song1.play();
          }}
      if (randomX = 2 ) {
        if (song2.isPlaying() ){
            song2.pause();
          } else {
            song2.play();
          }}
      if (randomX = 3 ) {
        if (song3.isPlaying() ){
            song3.pause();
          } else {
            song3.play();
          }}
      if (randomX = 4 ) {
        if (song4.isPlaying() ){
            song4.pause();
          } else {
            song4.play();
          }}
      if (randomX = 5 ) {
        if (song5.isPlaying() ){
            song5.pause();
          } else {
            song5.play();
          }}
      else {noise1.stop();song.stop(); song1.stop();song2.stop();song3.stop();song4.stop();song5.stop();}

      // iris.show();
      // iris.move();
}

    if (this.pos.y < 0 || height < this.pos.y) {
            amp = amp * 0.01;
      this.vel.y = this.vel.y * -0.85;
      this.tVel = random(-0.1, 0.01);
      this.d = this.d - 3;
      var randomY = random(5);
      if (randomY = 0 ) {
        if (song7.isPlaying() ){
            song7.pause();
          } else {
            song7.play();
          }}
      if (randomY = 1 ) {
        if (song8.isPlaying() ){
            song8.pause();
          } else {
            song8.play();
          }}
      if (randomY = 2 ) {
        if (song9.isPlaying() ){
            song9.pause();
          } else {
            song9.play();
          }}
      if (randomY = 3 ) {
        if (song10.isPlaying() ){
            song10.pause();
          } else {
            song10.play();
          }}
      if (randomY = 4 ) {
        if (song6.isPlaying() ){
            song6.pause();
          } else {
            song6.play();
          }}
      else {song6.stop(); song7.stop();song8.stop();song9.stop();song10.stop();}

            // this.acc = this.acc + 3;
      // this.pos.y = height;
      // song.play();
    }

}
}
