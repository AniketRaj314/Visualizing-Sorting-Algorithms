var width, height, size, snake, food, scale, iloop, jloop, min, f, s;
function setup(){
  width = 1000;
  height = 600;
  size = 15;
  createCanvas(width, height);
  bars = [];
  for(var i = 0, x = 0; i < width/size; i++, x += size){
    bars[i] = new Bars(x, size*random(1,height/size), size)
  }
  iloop = 0, jloop = 1, min = 0;
}

function draw(){
  background(0);
  f = jloop;
  if(bars[jloop].height < bars[min].height){
    min = jloop;
  }
  jloop++;
  if(jloop >= bars.length){
    temp = bars[iloop].height;
    bars[iloop].height = bars[min].height;
    bars[min].height = temp;
    s = iloop;
    temp = bars[iloop].y;
    bars[iloop].y = bars[min].y;
    bars[min].y = temp;
    iloop++;
    min = iloop;
    jloop = iloop+1;
  }
  drawBlocks(f, s);
  if(iloop >= bars.length - 1){
    console.log("END!");
    noLoop();
  }

}

function drawBlocks(f, s){
  for(var x = 0; x < bars.length; x++){
    if(x == f || x == s)
      fill(255, 0, 0);
    else
      fill(255);
    bars[x].show();
  }
}

function randomize(){
  for(var i = 0, x = 0; i < width/size; i++, x += size){
    bars[i] = new Bars(x, size*floor(random(1,height/size)), size)
    console.log(bars[i].height);
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