let honger = 100;
let gezondeheid = 100;
let moeheid = 100;
let blijheid = 100;

function setup() {
  createCanvas(400, 400);
  let voeden_button = createButton('voeden');
  voeden_button.position(100, 100);
  voeden_button.mousePressed(voeden);

  if (getItem("honger")==null)
  {
    honger = 100;
  }
  else
  {
    honger = getItem("honger");
  }
  console.log(getItem("test"));
}

function voeden() {
  honger = honger + 20;
}

function draw() {
  background(220);
  storeItem("honger",honger);
  //honger
  fill("blue");
  honger = honger - 0.05;
  if (honger < 0) { honger = 0; }
  if (honger > 100) { honger = 100; }
  rect(10, 10, 10, honger);
  //
  fill("yellow");
  rect(30, 10, 10, 100);

  fill("red");
  rect(50, 10, 10, 100);

  fill("green");
  rect(70, 10, 10, 100);
}
