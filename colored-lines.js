function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
	colorMode(HSB,H)

	stroke(H,H,100)
	
  for (var x = 10; x < width-10; x = x + 30) {
    line(x, height/2, mouseX, mouseY);
  }
	
	var H=x
}
