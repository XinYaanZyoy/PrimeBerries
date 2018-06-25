//information flow comes here in this file to make and behave berry object

class Berry {
  constructor() {
    this.x =  floor(random(cols))*unit;   //coordinates of a berry
    this.y = floor(random(rows))*unit;
    this.Rclr = random(255);            //RGB range of a berry
    this.Gclr = random(255);
    this.Bclr = random(255);
    this.n = primes[floor(random(primes.length))];   //radius of this berry
  } //ends construction of this berry


plot() {
    fill(this.Rclr,this.Gclr,this.Bclr);
    stroke(255);
    strokeWeight(1);
    ellipse(this.x,this.y,2*this.n);


    fill(100);
    rectMode(CENTER);
    textAlign(CENTER,CENTER);
    if(this.n<10) textSize(2*unit);
    else textSize(unit);
    text(this.n,this.x,this.y);
} //ends plot function


} // ends the Berry class
