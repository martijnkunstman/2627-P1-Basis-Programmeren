let positieXvanAuto1 = 50;
let timer = 0;
let statusStoplicht = "groen";

function keyPressed() {
  // Code to run.
  console.log("key is pressed");
  if (statusStoplicht == "groen") {
    statusStoplicht = "oranje";
    return;
  }
  if (statusStoplicht == "oranje") {
    statusStoplicht = "rood";
    return;
  }
  if (statusStoplicht == "rood") {
    statusStoplicht = "groen";
    return;
  }
}


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);


  timer = timer + 1;
  textSize(20);
  fill("black");
  text("timer:" + timer, 50, 50);
  text("statusStoplicht:" + statusStoplicht, 50, 80)
  fill("white");
  //auto 1
  rect(positieXvanAuto1, 100, 100, 50);
  circle(positieXvanAuto1 + 20, 150, 20);
  circle(positieXvanAuto1 + 80, 150, 20);
  if (positieXvanAuto1 > 400) {
    positieXvanAuto1 = 0;
  }
  //- stoplicht
  rect(300, 100, 50, 150,);
  circle(325, 130, 30);
  circle(325, 180, 30);
  circle(325, 220, 30);

  if (timer < 200) {
    fill("green");
    circle(325, 220, 30);
    positieXvanAuto1 = positieXvanAuto1 + 1;
  }
  if (timer > 200 && timer < 250) {
    fill("orange");
    circle(325, 180, 30);
    positieXvanAuto1 = positieXvanAuto1 + 0.2;
  }
  if (timer > 250) {
    fill("red");
    circle(325, 130, 30);
  }

  ////- stoplicht 2
  fill("white");
  rect(300 + 50, 100, 50, 150,);
  circle(325 + 50, 130, 30);
  circle(325 + 50, 180, 30);
  circle(325 + 50, 220, 30);
  
  if (statusStoplicht == "groen") {
    fill("green");
    circle(325 + 50, 220, 30);
  }
  if (statusStoplicht == "oranje") {
    fill("orange");
    circle(325 + 50, 180, 30);
  }
  if (statusStoplicht == "rood") {
    fill("red");
    circle(325 + 50, 130, 30);
  }


  if (timer > 450) {
    timer = 0;
  }


}
