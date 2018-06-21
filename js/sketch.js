var can;
var cols,rows;
const unit = 10;
var count=0;
var berries = [];
var primes = [0, 1, 2, 5, 3,13,23,43,53,73,83, 11,31,41,61,71, 7,17,37,47,67,97, 19,29,59,79,89];
var vectorX, vectorY;


function setup(){
  can = createCanvas(windowWidth,windowHeight);
    can.position(0,0);

  cols=width/unit;
  rows=height/unit;

ib = new Ib;

Berry();
}



function draw(){

  background(0);
  ib.born();
  ib.explore();
TorM();
    for(let i=0; i<berries.length; i++){
       fill(berries[i].Rclr,berries[i].Gclr,berries[i].Bclr);
       noStroke();
     ellipse(berries[i].x,berries[i].y,berries[i].r+unit);
     fill(180);
     rectMode(CENTER);
     text(berries[i].r,berries[i].x-7,berries[i].y+3);
     }

noFill();
stroke(111);
strokeWeight(unit);
rectMode(CORNER);
rect(0,0,width,height);

}
