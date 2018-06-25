//information flow comes here in this file to make and behave ib object

class Ib{  //Intelligent body

  constructor(){
    this.x = width/2;   //coordinates of an ib
    this.y = height/2;
    this.xspeed = 0;  //x and y components of speed of an ib
    this.yspeed = 0;
} //ends construction of an ib


//decides the initial direction and speed of Ib
//according to the data sent by mouse or touch or keyboard control
direction(vx,vy) {
     this.xspeed = vx;
     this.yspeed = vy;
}

  explore() {    //moves Ib with the specified speed in specified direction
    this.x += this.xspeed;
    this.y += this.yspeed;

//boundries of hra
this.x = constrain(this.x, 0+unit+w/2,width-unit-w/2);
this.y = constrain(this.y, 0+unit+h/2,height-unit-h/2);
}

born() {    //display properties of Ib
    noStroke();
    fill(222,random(255));
ellipse(this.x,this.y,w,h);

          //sends the positon data to the global var
    // vectorX=this.x;
    // vectorY=this.y;

  }

} //Ib defined
