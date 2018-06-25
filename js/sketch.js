//information flow begins from this file

var pad;  //image vars
var nm;

var can;  //canvas as an object
var cols,rows;  //of grid
const unit = 10;  //unit square of this grid

// var vectorX, vectorY;  //positon of an ib
var w=unit,h=unit;  //width and height of an ib

var berries = [27];   //Berry objects
var primes = [0, 1, 2, 5, 3,13,23,43,53,73,83, 11,31,41,61,71, 7,17,37,47,67,97, 19,29,59,79,89];
//an array of all possible primes b/n 0 to 99 including 0 and 1

//a one time run function

function preload() {
  pad = loadImage('picz/pad.png');   //mouse pad
  icon = loadImage('picz/rasp berry.png');
}


function setup(){

  can = createCanvas(1200,600);
    can.position(windowWidth-1200,windowHeight-600);
    // can.style('cursor','none');
var i1 = createImg('picz/rasp berry.png');
i1.position(330,0);
i1.style('width','100px');
i1.style('height','100px');

var i2 = createImg('picz/rasp berry.png');
i2.position(width-300+30,0);
i2.style('width','100px');
i2.style('height','100px');


// textAlign(CENTER);
// textSize(20);
var greeting = createElement('h2', 'what is your name?');
  greeting.position(10, 0);
  greeting.style('color','white');

var name = createInput("mine's XinYaanZyoy");
  name.position(20,50);

var enter = createButton("Enter");
  enter.position(200,50);

  cols=width/unit;   //defines cols and rows according to the screen
  rows=height/unit;

// makes 27 objects called berries
for(let i=0; i<27; i++){
  berries[i] = new Berry;
}

//makes an ib
ib = new Ib;

}  //end of setup


//a looping function
function draw(){

  background(25,75);

ib.born();      //displays the intelligent body
ib.explore();    //defines the way and limits to move it

TorM();    //Touch or Mouse control
           //keyboard control is defined in KBcontrol.js using p5.js function keyPressed()


for(let i=0; i<27; i++){
 berries[i].plot();
}

   noFill();          //grey border frame
   stroke(111);
   strokeWeight(unit);
   rectMode(CORNER);
   rect(0,0,width,height);

   for(let i=unit; i<width-unit; i+=unit){
     for(let j=unit; j<height-unit; j+=unit){
       noFill();
       stroke(85);
       strokeWeight(1);
       rect(i,j,unit,unit);
     }
   }
stroke(255);
   line(width/2,0+unit,width/2,height-unit);
   line(0+unit,height/2,width-unit,height/2);
strokeWeight(2);
ellipse(width/2,height/2,100)

stroke(111);
strokeWeight(3);
rect(0+unit,0+unit,width-2*unit,height-2*unit);

imageMode(CENTER);
image(pad,width/2,height/2,100,100);
} //ends block but not looping function draw
