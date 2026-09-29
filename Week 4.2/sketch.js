let posX = [];
let posY = [];
let posSize = [];
//kleur
//r 0-255
//g 0-255
//b 0-255
let r = [];
let g = [];
let b = [];
//
//let speedY = 0;
let mySound;


async function setup() {
  createCanvas(400, 400);
  mySound = await loadSound('bubble.mp3');
  for (let i = 0; i < 100; i++) {
    posX.push(int(random(0, 400)));
    posY.push(int(random(0, 400)));
    posSize.push(int(random(2, 80)));
    posSize.sort(function (a, b) {  return a - b;  });
    r.push(int(random(0, 255)));
    g.push(int(random(0, 255)));
    b.push(int(random(0, 255)));
  }
}

function draw() {
  background(220);  
  for (let i = 0; i < 100; i++) {
    posY[i] = posY[i] - posSize[i]/10;
    posX[i] = posX[i] - posSize[i]/5;
    if (posX[i] <= -100)
    {
      posX[i] = 500;
    }
     if (posY[i] <= -100)
    {
      posY[i] = 500;
    }
    fill(r[i], g[i], b[i],200);
    circle(posX[i], posY[i], posSize[i]);
  }
}


function keyPressed() {
  console.log("keypress");
  mySound.play();
  posX = [];
  posY = [];
  posSize = [];
  r = [];
  g = [];
  b = [];
  for (let i = 0; i < 100; i++) {
    posX.push(int(random(0, 400)));
    posY.push(int(random(0, 400)));
    posSize.push(int(random(10, 40)));
    r.push(int(random(0, 255)));
    g.push(int(random(0, 255)));
    b.push(int(random(0, 255)));
  }
}