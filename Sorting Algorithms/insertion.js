var width, height, size, snake, food, scale, iloop, jloop, f, s, steps;
function setup(){
  width = innerWidth;
  height = innerHeight;
  size = 10;
  
  createCanvas(width, height);
  bars = [];
  for(var i = 0, x = 0; i < width/size; i++, x += size){
    bars[i] = new Bars(x, size*random(1,height/size), size)
  }
  iloop = 1;
  steps = 0;
}

function draw(){
  background(0);
  key_height = bars[iloop].height;
  console.log(++steps);
  key_y = bars[iloop].y;
  frameRate(300)
  jloop = iloop - 1;
  console.log(++steps);
  f = iloop;
  console.log(++steps);
  while(jloop >= 0 && bars[jloop].height > key_height) {
    s = jloop;
    bars[jloop+1].height = bars[jloop].height;
    
    bars[jloop+1].y = bars[jloop].y;
    jloop--;
    console.log(++steps);
    clear();
    background(0);
    drawBlocks(f,s);
  }

  bars[jloop + 1].height = key_height;
  bars[jloop + 1].y = key_y;
  console.log(++steps);
  iloop++;
  if(iloop == bars.length){
    console.log("Final Count:"+steps);
    console.log("Number of elements:"+bars.length);
    noLoop();
    drawBlocks(-1, -1);
  }

}

function drawBlocks(f, s){
  if (f == -1) {
    // fill(0, 0, 255);
    // for(var x = 0; x < bars.length; x++){
    //   bars[x].show();
    // }
  }
  else {
    for(var x = 0; x < bars.length; x++){

      if(x == f)
        fill(255, 0, 0);

      else if(x == s)
        fill(90, 255, 0)

      else
        fill(255);
      bars[x].show();
    }
  }
}

function randomize(){
  for(var i = 0, x = 0; i < width/size; i++, x += size){
    bars[i] = new Bars(x, size*floor(random(1,height/size)), size)
  }
}
class Bars{
  constructor(x, y, width){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height - y;
  }

  show(){
    rect(this.x, this.y, this.width, this.height);
  }

}

function mousePressed() {
  noLoop();
}