function setup() {
  createCanvas(640, 480);
  background(99, 2, 2);
  // background(red, green, blue);
  stroke(255);
  noFill();
}


function draw() {
  //background(246, 153, 136);
//for (시작상태; 반복하는 조건; 증가값)
  stroke(134, 153, 184)   
  for (var x = 1; x <=5; x++)
  {
    ellipse(x * 400 + 1300, x  * 30 + 1450, x * 450, x * 45);
  }
  stroke(250, 217, 20)  
  var size = Math.abs(mouseX - 320);
ellipse(320, 240, size, size);
  //ellipse(320, 240, mouseX, mouseY);
}