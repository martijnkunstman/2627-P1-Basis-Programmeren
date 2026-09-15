
let auto1xpositie = -300;
let richtingAuto1 = 3;
let timer = 0;


function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);
  timer = timer + 1;
 
  fill("black");
  textSize(30);
  text("auto1xpositie:" + auto1xpositie, 10, 50);
  text("timer:" + timer, 10, 80);
  //car
  fill("white");
  rect(auto1xpositie, 100, 140, 50);
  circle(30 + auto1xpositie, 150, 40);
  circle(110 + auto1xpositie, 150, 40);
  //logic
  if (auto1xpositie > 800) {
    richtingAuto1 = -richtingAuto1;
  }
  if (auto1xpositie < -300) {
    richtingAuto1 = -richtingAuto1;
  }
  if (timer > 600) {
    timer = 0;
  }
  //trafficlight
  rect(500, 100, 80, 240);
  circle(540, 150, 60);
  circle(540, 220, 60);
  circle(540, 290, 60);
  //
  if (timer < 300) {
    fill("green");
    circle(540, 150, 60);
     auto1xpositie = auto1xpositie + richtingAuto1;
  }
  if (timer > 300 && timer < 400) {
    fill("yellow");
    circle(540, 220, 60);
     auto1xpositie = auto1xpositie + richtingAuto1/2;
  }
  if (timer > 400) {
    fill("red");
    circle(540, 290, 60);
  }
}
