
let nuBijDitScherm = "startscherm";
let antwoordA;
let antwoordB;
let antwoordC;
let antwoordD;
let startSchermButton;

function setup() {
  createCanvas(800, 800);
  startSchermButton = createButton('Start met de vragen.');
  startSchermButton.position(300, 300);
  startSchermButton.style('font-size', '16px');
  startSchermButton.mousePressed(startSchermButtonClick);

  antwoordA = createButton('3');
  antwoordA.position(100, 200);
  antwoordB = createButton('2');
  antwoordB.position(200, 200);
  antwoordC = createButton('4');
  antwoordC.position(100, 300);
  antwoordD = createButton('0');
  antwoordD.position(200, 300);

  antwoordB.mousePressed(goedFunctie);
}

function startSchermButtonClick() {
  console.log('Button werd geklikt!');
  nuBijDitScherm = "vragen";
}

function goedFunctie() {
  console.log('Dat is het goede antwoord!');
  antwoordB.style('background-color', '#4CAF50');
}

function draw() {
  background(220);
  if (nuBijDitScherm == "startscherm") {
    text("dit is het startscherm", 50, 50);
    startSchermButton.show();
    antwoordA.hide();
    antwoordC.hide();
    antwoordB.hide();
    antwoordD.hide();
  }
  if (nuBijDitScherm == "vragen") {
    textSize(20);
    text("dit is het vragen scherm", 50, 50);
    startSchermButton.hide();
    antwoordA.show();
    antwoordB.show();
    antwoordC.show();
    antwoordD.show();
    //
    textSize(40);
    text("Hoeveel is 1 + 1?", 50, 150);
  }
  if (nuBijDitScherm == "eindscherm") {
    startSchermButton.hide();
  }
}
