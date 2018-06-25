//OK

//keyboard control of an ib

//after taking decisions sends the data to Ib.js

function keyPressed(){
  if(keyCode === UP_ARROW){
    ib.direction(0,-unit);
  } else if (keyCode === DOWN_ARROW) {
    ib.direction(0,unit);
  } else if (keyCode === RIGHT_ARROW) {
    ib.direction(unit,0);
  } else if (keyCode === LEFT_ARROW) {
    ib.direction(-unit,0);
  }
}
