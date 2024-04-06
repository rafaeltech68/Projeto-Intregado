let a = 0;

function setup() {
  createCanvas(400, 400);
  background(0);
  fill(255,0,0);
}

function draw() {
  
  translate(200,200);
  rotate(PI);
  
  let x = 16 * pow(sin(a),3) * 10;
  let y = (13 * cos(a) - 5 * cos(2 * a) -2 * cos(3 * a) - cos(4 * a)) * 10;
  
  circle(x, y, 20);
  
  a += 0.03;
}