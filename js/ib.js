class Ib{  //Intelligent body
  constructor(){
  this.x = width/2;
  this.y = height/2;
  this.xspeed = 0;
  this.yspeed = 0; }

direction(x,y) {
     this.xspeed = x*(unit/2);
     this.yspeed = y*(unit/2);

}

  explore() {
    this.x += this.xspeed;
    this.y += this.yspeed;

this.x = constrain(this.x, unit,width-unit);
this.y = constrain(this.y, unit,height-unit);

  }

born() {

    stroke(111);
    strokeWeight(unit);
    point(this.x,this.y);

    vectorX=this.x;
    vectorY=this.y;

  }
}
