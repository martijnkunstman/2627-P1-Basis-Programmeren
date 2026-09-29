let posX = [];
let posY = [];
let posSize = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 100; i++) {
    posX.push(int(random(0, 400)));
    posY.push(int(random(0, 400)));
    posSize.push(int(random(10, 40)));
  }
}

function draw() {
  background(220);
  for (let i = 0; i < 100; i++) {
    circle(posX[i], posY[i], posSize[i]);
  }
}

function keyPressed() {
  console.log("keypress");
  posX = [];
  posY = [];
  posSize = [];
  for (let i = 0; i < 100; i++) {
    posX.push(int(random(0, 400)));
    posY.push(int(random(0, 400)));
    posSize.push(int(random(10, 40)));
  }
}