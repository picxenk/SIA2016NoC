
//이미지 파일
var deathStarImg
var hothImg
var tatooineImg
var coruscantImg
var dagobahImg
var mustafarImg
var nabooImg

var deathStarHoverImg
var hothHoverImg
var tatooineHoverImg
var coruscantHoverImg
var dagobahHoverImg
var mustafarHoverImg
var nabooHoverImg

var lightSaberImg1
var lightSaberImg2
var lightSaberImg3

var logoImg
var newLogoImg

var explosionImg

//사운드
var starwarsTheme
var lightSaberSnd
var lightSaberSnd2
var deathStarBeamSnd

var backgroundDsp=[]
var stars = []
var force
var myText
var opening
var attack
var logo

//불리언
var isForcing
var isAnimating
var isAttacking
var isPlaying

var mousePointerIndex

function setup() {
  // createCanvas(windowWidth, windowHeight)
  var myCanvas = createCanvas(700, 700);
  myCanvas.parent('p5Canvas');
  noCursor()
  starwarsTheme = loadSound('/SIA2016NoC/projects/starwars/assets/theme.mp3',loaded);
  lightSaberSnd = loadSound('/SIA2016NoC/projects/starwars/assets/saber1.mp3');
  lightSaberSnd2 = loadSound('/SIA2016NoC/projects/starwars/assets/saber2.mp3')
  deathStarBeamSnd = loadSound('/SIA2016NoC/projects/starwars/assets/beam.mp3')

  deathStarImg = loadImage('/SIA2016NoC/projects/starwars/assets/deathStar.png');
  hothImg = loadImage('/SIA2016NoC/projects/starwars/assets/hoth.png');
  tatooineImg = loadImage('/SIA2016NoC/projects/starwars/assets/tatooine.png');
  coruscantImg = loadImage('/SIA2016NoC/projects/starwars/assets/coruscant.png');
  dagobahImg = loadImage('/SIA2016NoC/projects/starwars/assets/dagobah.png');
  mustafarImg = loadImage('/SIA2016NoC/projects/starwars/assets/mustafar.png');
  nabooImg = loadImage('/SIA2016NoC/projects/starwars/assets/naboo.png');

  deathStarHoverImg = loadImage('/SIA2016NoC/projects/starwars/assets/deathStarHover.png')
  hothHoverImg = loadImage('/SIA2016NoC/projects/starwars/assets/hothHover.png')
  tatooineHoverImg = loadImage('/SIA2016NoC/projects/starwars/assets/tatooineHover.png')
  coruscantHoverImg = loadImage('/SIA2016NoC/projects/starwars/assets/coruscantHover.png')
  dagobahHoverImg = loadImage('/SIA2016NoC/projects/starwars/assets/dagobahHover.png')
  mustafarHoverImg = loadImage('/SIA2016NoC/projects/starwars/assets/mustafarHover.png')
  nabooHoverImg = loadImage('/SIA2016NoC/projects/starwars/assets/nabooHover.png')

  explosionImg = loadAnimation ("/SIA2016NoC/projects/starwars/assets/01.png","./projects/starwars/assets/09.png")

  logoImg = loadImage('/SIA2016NoC/projects/starwars/assets/logo3.png');
  newLogoImg = loadImage('/SIA2016NoC/projects/starwars/assets/newLogo.png')
  lightSaberImg1 = loadImage('/SIA2016NoC/projects/starwars/assets/lightSaber1.png')
  lightSaberImg2 = loadImage('/SIA2016NoC/projects/starwars/assets/lightSaber2.png')
  lightSaberImg3 = loadImage('/SIA2016NoC/projects/starwars/assets/lightSaber3.png')

  // var fs = fullscreen();
  // fullscreen(!fs);
  // lightSaberSnd.stop()

  //초기화
  mousePointerIndex = 1
  logo = new Logo
  myText = new MyText
  force = new Force
  attack = new Attack
  opening = new Opening

  isForcing = false
  isAttacking = false
  isPlaying = false
  isAnimating = false

  for(var i=0; i<7; i++){
    stars[i] = new Star
  }
function loaded(){
  starwarsTheme.setVolume(0.5)
  starwarsTheme.loop()

}

  for(var k=0; k<150;k++){
    backgroundDsp[k] = new BackgroundDsp
  }
}



function draw() {
  // createCanvas(windowWidth, windowHeight)
  var myCanvas = createCanvas(700, 700);
  myCanvas.parent('p5Canvas');
  if(!isPlaying){
    opening.show()

  }
  if(isPlaying){
    // background(0)
    background(0,0,18)
    // var scaleAmount = mouseX / 4 + 0.8;
  	// scale(scaleAmount);

    force.apply()

    for(var i=0;i<backgroundDsp.length;i++){
      backgroundDsp[i].colorChange()
      backgroundDsp[i].show()
    }
    if(mouseIsPressed && mousePointerIndex == 1 && isPlaying){
        attack.show(stars[0])
    }
    for(var i=0; i<stars.length;i++){

      stars[i].show(i)
      stars[i].move()
      stars[i].edge()
    }

    for(var i=0; i<stars.length;i++){
      myText.show(stars[i])
      logo.show()
    }
    ifHover()

    myText.logo()
    mouseDraw()
  }
}

function Attack(){
  this.pos = createVector(0,0)
  this.show = function(m1){
    this.pos.x = m1.pos.x+m1.r/2-m1.r/7
    this.pos.y = m1.pos.y+m1.r/2-m1.r/7

    stroke(220,10,30);
    strokeWeight(8)
    line(this.pos.x,this.pos.y,mouseX+4,mouseY)
    stroke(220,100,30);
    strokeWeight(4)
    line(this.pos.x,this.pos.y,mouseX+4,mouseY)
    noStroke()
    logo.show()

  }
}

function Logo(){
  this.offset = createVector(30,7)
  this.pos = createVector(0,0)
  this.show = function(){
    this.pos = createVector(windowWidth/2-logoImg.width/3-this.offset.x,windowHeight/2)

    image(logoImg,this.pos.x,this.pos.y,logoImg.width,logoImg.height)
  }
}


function Opening(){
  this.img
  this.pos = createVector(0,windowHeight/4)
  this.r=60
  this.show = function(){
        textFont("Star Jedi")
        textSize(60)
        imageMode(CENTER)
        for(var e=0; e<7; e++){
          if(e==0 && !this.isHovering){
            this.img = deathStarImg
          }
          if(e==1&& !this.isHovering){
            this.img = hothImg
          }
          if(e==2&& !this.isHovering){
            this.img = tatooineImg
          }
          if(e==3&& !this.isHovering){
            this.img = coruscantImg
          }
          if(e==4&& !this.isHovering){
            this.img = dagobahImg
          }
          if(e==5&& !this.isHovering){
            this.img = mustafarImg
          }
          if(e==6&& !this.isHovering){
            this.img = nabooImg
          }
          this.pos.x = windowWidth/7*(e+1)-this.img.width+7
          image(this.img,this.pos.x,this.pos.y,this.r,this.r)

        }
        image(newLogoImg,windowWidth/2,windowHeight/2-30,newLogoImg.width/2,newLogoImg.height/2)
        fill(sin(frameCount/14)*255)
        text("press any key",windowWidth/2-250,windowHeight/2+170)
      }
}


function MyText(){
  this.offset = createVector(15,0)
  this.show = function(m){
    noStroke()
    fill(255)
    textSize(12)
    textAlign(CENTER)
    textFont("Star Jedi")
    if(m.indexNum == 0){
      text("Death Star",m.pos.x+m.r/2,m.pos.y+m.r+10)
    }
    if(m.indexNum == 1){
      text("Hoth",m.pos.x+m.r/2,m.pos.y+m.r+10)
    }
    if(m.indexNum == 2){
      text("Tatooine",m.pos.x+m.r/2,m.pos.y+m.r+10)
    }
    if(m.indexNum == 3){
      text("coruscant",m.pos.x+m.r/2,m.pos.y+m.r+10)
    }
    if(m.indexNum == 4){
      text("Dagobah",m.pos.x+m.r/2,m.pos.y+m.r+10)
    }
    if(m.indexNum == 5){
      text("Mustafar",m.pos.x+m.r/2,m.pos.y+m.r+10)
    }
    if(m.indexNum == 6){
      text("Naboo",m.pos.x+m.r/2,m.pos.y+m.r+10)
    }
  }
  this.logo = function(){
    noStroke()
    fill(255)
    textSize(12)
    textAlign(LEFT)
    textFont("Star Jedi")
    text("F KEY AND CLiCK : MAY THE FoRCE BE WITH You",logo.pos.x,logo.pos.y+logoImg.height/2+logo.offset.y)
  }
}

function BackgroundDsp(){
    this.i = 255
    this.c = color(this.i)
    this.pos = createVector(random(windowWidth),random(windowHeight))
    this.size = 3

    this.show = function(){
      fill(this.c)
      rect(this.pos.x,this.pos.y,this.size,this.size)
    }

    this.colorChange = function(){
        this.c = color(sin(frameCount/6)*100+155)
    }
}


function keyPressed(){
  if(!isPlaying){
    // var fs = fullscreen();
    // fullscreen(!fs);
    isPlaying = true
  }
  println(keyCode)
  if(keyIsDown(81)){
    isPlaying = false
  }
  if(keyIsDown(70)){
    isForcing = true
  }
  if(keyIsDown(49)){
    mousePointerIndex = 1
  }
  if(keyIsDown(50)){
    mousePointerIndex = 2
  }
  if(keyIsDown(51)){
    mousePointerIndex = 3
  }
}

function keyReleased(){
  if(keyCode === 70 ){
  isForcing = false;
    for(var i = 0; i<stars.length;i++){
      stars[i].vel.y = 0
    }
  }
}
function Force(){
  this.forceAmount = 2.2
  this.apply = function(){
  if(keyIsDown(70)&&isForcing){
    for(var i=0; i <stars.length;i++){
        stars[i].vel.mult(0)
        if(stars[i].pos.x<mouseX){
          stars[i].vel.x = this.forceAmount
        }
        if(stars[i].pos.x>mouseX){
          stars[i].vel.x = -this.forceAmount
        }
        if(stars[i].pos.y<mouseY){
          stars[i].vel.y = this.forceAmount
        }
        if(stars[i].pos.y>mouseY){
          stars[i].vel.y = -this.forceAmount
        }
      }
    }
  }
}



function ifHover(){
  for(var i=0; i < stars.length;i++){
    if (mouseX>stars[i].pos.x && mouseX<stars[i].pos.x+stars[i].r&& mouseY>stars[i].pos.y && mouseY<stars[i].pos.y+stars[i].r){
      stars[i].show(i+7)
      logo.show()
      stars[i].isHovering = true
    } else {
      stars[i].isHovering = false
    }
  }
}

function mouseDraw(){
    if(mousePointerIndex == 1){
      image(lightSaberImg1,mouseX,mouseY,lightSaberImg1.width,lightSaberImg1.height)
    }
    if(mousePointerIndex == 2){
      image(lightSaberImg2,mouseX,mouseY,lightSaberImg2.width,lightSaberImg2.height)
    }
    if(mousePointerIndex == 3){
      image(lightSaberImg3,mouseX,mouseY,lightSaberImg3.width,lightSaberImg3.height)
    }
}

function mouseMoved(){
  if(isPlaying){
    if(mousePointerIndex==1&&mouseIsPressed){
      attack.show(stars[0])
    }
    ifHover()
    myText.logo()
    logo.show()
    mouseDraw()
  }
}
function Star(){
  this.r = random(32,96)
  this.pos = createVector(random(0,width),random(height/4))
  this.vel = createVector(random(-1.5,1.5),0)
  this.mass = this.r
  //this.preVel = this.vel
  this.coco = -0.3
  this.img
  this.isHovering = false
  this.indexNum = -1
  // this.preVel = createVector(0,0)

  this.show = function(e){
      this.indexNum = e
      if(e==0 && !this.isHovering){
        this.img = deathStarImg
      }
      if(e==1&& !this.isHovering){
        this.img = hothImg
      }
      if(e==2&& !this.isHovering){
        this.img = tatooineImg
      }
      if(e==3&& !this.isHovering){
        this.img = coruscantImg
      }
      if(e==4&& !this.isHovering){
        this.img = dagobahImg
      }
      if(e==5&& !this.isHovering){
        this.img = mustafarImg
      }
      if(e==6&& !this.isHovering){
        this.img = nabooImg
      }
      if(e==7&& this.isHovering){
        this.img = deathStarHoverImg
      }
      if(e==8&& this.isHovering){
        this.img = hothHoverImg
      }
      if(e==9&& this.isHovering){
        this.img = tatooineHoverImg
      }
      if(e==10&& this.isHovering){
        this.img = coruscantHoverImg
      }
      if(e==11&& this.isHovering){
        this.img = dagobahHoverImg
      }
      if(e==12&& this.isHovering){
        this.img = mustafarHoverImg
      }
      if(e==13&& this.isHovering){
        this.img = nabooHoverImg
      }
      // imageMode(CENTER)
      // translate(this.pos.x,this.pos.y)
      // rotate(radians(frameCount));
      // image(this.img,0,0,this.r,this.r)
      // translate(0,0)
      image(this.img,this.pos.x,this.pos.y,this.r,this.r)
  }

  this.edge = function(){
    if(this.pos.x<= 0){
      this.pos.x=0
      this.vel.x*=-1
    }
    if(this.pos.y <= 0){
      this.pos.y=0
      this.vel.y*=-1
    }
    if(this.pos.x + this.r >= width){
      this.pos.x = width - this.r
      this.vel.x*=-1
    }
    if(this.pos.y + this.r >= height){
      this.pos.y = height-this.r
      this.vel.y*=-1
    }
  }

  this.move = function(){
    this.pos.x += this.vel.x*this.mass/60
    this.pos.y += this.vel.y*this.mass/60

  }


  this.intersects = function(otherObj) {
    if (this.r/2+otherObj.r/2 <= dist(this.pos.x, this.pos.y, otherObj.pos.x,otherObj.pos.y)){
      return true;
    } else {
      return false;
    }
  }
}

function mouseReleased(){
  if(isPlaying){
    if(mousePointerIndex==1){
      attack.show(stars[0])
    }

    ifHover()
    myText.logo()
    logo.show()
    mouseDraw()
  }
}

function mouseDragged(){
  if(isPlaying){
    logo.show()
    ifHover()
    if(mousePointerIndex == 1){
      attack.show(stars[0])
    }
    myText.logo()
    mouseDraw()
  }
}

function mousePressed(){
  if(isPlaying){
    // var splat = createSprite(mouseX, mouseY);
    // splat.addAnimation("normal", "http://cfs.tistory.com/custom/blog/208/2086978/skin/images/01.png", "http://cfs.tistory.com/custom/blog/208/2086978/skin/images/09.png");
    // splat.life = 40;

    if(mousePointerIndex==1){
      deathStarBeamSnd.setVolume(0.5)
      deathStarBeamSnd.play()
    }
    if(mousePointerIndex==3){
      lightSaberSnd2.setVolume(0.5)
      lightSaberSnd2.play()
    }else{
      lightSaberSnd.setVolume(0.5)
      lightSaberSnd.play()
    }
    for(var i=0; i < stars.length;i++){
      if (mouseX>stars[i].pos.x && mouseX<stars[i].pos.x+stars[i].r&& mouseY>stars[i].pos.y && mouseY<stars[i].pos.y+stars[i].r){
        stars[i].vel.x *= 3.5
        stars[i].vel.y += random(-10,10)
        stars[i].vel.y *= 1.7
        stars[i].show(i)
        stars[i].isHovering = true
      } else{
        stars[i].isHovering = false
      }
    }
    if(mousePointerIndex == 1){
      attack.show(stars[0])
    }
    logo.show()
    mouseDraw()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  println(windowWidth)
  println(windowHeight)
}
