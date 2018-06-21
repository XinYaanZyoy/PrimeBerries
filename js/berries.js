function Berry(){

for(let i=0; i<200&&berries.length<25; i++){

  var berry = {
    x: floor(random(cols))*unit,
    y: floor(random(rows))*unit,
    Rclr: random(180),
    Gclr: random(80),
    Bclr: random(240),
    r: primes[floor(random(primes.length))],
  };



var overlap = false;

for(let j=0; j<berries.length; j++){
      var d = dist(berry.x,berry.y, berries[j].x,berries[j].y);
      if(d<=berry.r+berries[j].r+10 || (berry.x<width/2+100&&berry.x>width/2-100&&berry.y<height/2+100&&berry.y>height/2-100)){
         overlap = true;
          break;  //quit the inner loop
       }
  }//inner

      if(!overlap){
        berries.push(berry);
      }
}//outer

}
