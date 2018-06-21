function TorM() {
  if(mouseX>pmouseX) ib.direction(1,0);
  else if(mouseX<pmouseX) ib.direction(-1,0);
       else if(mouseY>pmouseY) ib.direction(0,1);
            else if(mouseY<pmouseY) ib.direction(0,-1);

}
