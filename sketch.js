var bg;
var y = 0;

function setup() {
 
  bg = loadImage("homework/mkw_89095.jpg");
  createCanvas(640, 960);
}

function draw() {
  background(bg);
  
  stroke(226, 204, 0);
  line(0, y, width, y);
  
  y++;
  if (y > height) {
    y = 0; 
  }
}