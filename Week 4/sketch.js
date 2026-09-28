
let xpositie = 0;
let ypositie = 0;
let kleurRood = 0
let kleurGroen = 0;
let kleurBlauw = 0;

let xpositieCircle = 0;
let ypositieCircle = 0;
let kleurRoodCircle = 0
let kleurGroenCircle = 0;
let kleurBlauwCircle = 0;

let xPosities = [10,30,21,99,60,12,200,300,250];

function setup() {
  createCanvas(800, 800);
  xpositie = random(0, 400);
  ypositie = random(0, 400);
  kleurRood = random(0, 255);
  kleurGroen = random(0, 255);
  kleurBlauw = random(0, 255);

  xpositieCircle = random(0, 400);
  ypositieCircle = random(0, 400);
  kleurRoodCircle = random(0, 255);
  kleurGroenCircle = random(0, 255);
  kleurBlauwCircle = random(0, 255);

}

function draw() {
  background(220);
  //let xpositie = random(0,400);
  fill(kleurRood, kleurGroen, kleurBlauw);
  rect(xpositie, ypositie, 200);
  //circle?
  fill(kleurRoodCircle, kleurGroenCircle, kleurBlauwCircle);
  circle(xpositieCircle, ypositieCircle, 200);
  //
  fill ("White")
  circle(50,50,50);
}

function keyPressed() {
  xpositie = random(0, 400);
  ypositie = random(0, 400);
  kleurRood = random(0, 255);
  kleurGroen = random(0, 255);
  kleurBlauw = random(0, 255);

  xpositieCircle = random(0, 400);
  ypositieCircle = random(0, 400);
  kleurRoodCircle = random(0, 255);
  kleurGroenCircle = random(0, 255);
  kleurBlauwCircle = random(0, 255);
}
