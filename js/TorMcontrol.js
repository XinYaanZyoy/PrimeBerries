//OK

//mouse control of an ib

//after taking decisions sends the data to Ib.js

function TorM() {

      if(mouseX<=width/2+50 && mouseX>=width/2-50 && pmouseX<=width/2+50 && pmouseX>=width/2-50  && mouseY<=height/2+50 && mouseY>=height/2-50 && pmouseY<=height/2+50 && pmouseY>=height/2-50){
  if(mouseX>pmouseX) ib.direction(unit,0);
  else if(mouseX<pmouseX) ib.direction(-unit,0);
       else if(mouseY>pmouseY) ib.direction(0,unit);
            else if(mouseY<pmouseY) ib.direction(0,-unit);
          }
}
