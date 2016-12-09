var img;
var smallPoint, largePoint;

var colors = [];
var index = 0;

var angle = 0;

var alph = 10;

function setup() {
  // var canvas = createCanvas(windowWidth, windowHeight);
  var myCanvas = createCanvas(700, 700);
  myCanvas.parent('p5Canvas');
  // canvas.id('sketch-container');
  colors.push(color(200, 150, 195, 30));
  colors.push(color(100, 100, 37, 1));
  colors.push(color(220, 55));
  colors.push(color(150, 11));

  smallPoint = 5;
  largePoint = 100;
  imageMode(CENTER);
  noStroke();
  clear();
  angleMode(RADIANS);
}

function draw() {

  for (var i = 0; i < 15; i++) {
    var v = p5.Vector.random2D();

    var wave = map(sin(angle), -1, 1, 0, 4);

    v.mult(random(1, 20*wave));
    var pointillize = random(smallPoint, largePoint);
    var x = mouseX + v.x;
    var y = mouseY + v.y;
    fill(colors[index]);
    ellipse(x, y, pointillize, pointillize);
  }

  if (random(1) < 0.1) {
    index = (index + 1) % colors.length;
  }

  angle += 0.02;

  if(mouseIsPressed){
    background(220)
  }
}
