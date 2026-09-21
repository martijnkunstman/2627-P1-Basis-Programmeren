let counter = 0;
let hokje1 = "leeg";
let hokje2 = "leeg";

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  strokeWeight(4);
  fill("white");
  rect(100, 100, 100, 100, 20);
  textSize(40);
  fill("black");
  text("mouseX:" + mouseX, 10, 30);
  text("mouseY:" + mouseY, 10, 60);

  if (mouseX > 100 && mouseX < 200) {
    fill(255, 0, 0, 100);
    rect(100, 0, 100, 600);
  }

  if (mouseY > 100 && mouseY < 200) {
    fill(0, 255, 0, 100);
    rect(0, 100, 600, 100);
  }

  if (mouseX > 100 && mouseX < 200 && mouseY > 100 && mouseY < 200) {
    // fill("black");
    // textSize(100)
    // text("X", 120, 180)
  }

  if (hokje1 == "X")
  {
    fill("black");
    textSize(100)
    text("X", 120, 180)
  }

}


function mouseClicked() {

  if (mouseX > 100 && mouseX < 200 && mouseY > 100 && mouseY < 200) {
    counter = counter + 1;
    hokje1 = "X";
  }
  console.log(counter);

}
