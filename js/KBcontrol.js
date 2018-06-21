function keyPressed(){
  if(keyCode === UP_ARROW){
    ib.direction(0,-1);
  } else if (keyCode === DOWN_ARROW) {
    ib.direction(0,1);
  } else if (keyCode === RIGHT_ARROW) {
    ib.direction(1,0);
  } else if (keyCode === LEFT_ARROW) {
    ib.direction(-1,0);
  }
}
