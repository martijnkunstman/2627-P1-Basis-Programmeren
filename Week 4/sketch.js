let hokje1waarde = 0;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill("black");
  textSize(30);
  text("mouseX:" + mouseX, 10, 30);
  text("mouseY:" + mouseY, 10, 60);
   text("hokje1waarde:" + hokje1waarde, 10, 90);

  rect(100, 100, 100);

  if (mouseX > 100 && mouseX < 200) {
    fill(255, 0, 0, 100);
    rect(100, 0, 100, 400);
  }

  if (mouseY > 100 && mouseY < 200) {
    fill(0, 255, 0, 100);
    rect(0, 100, 400, 100);
  }

  if (mouseX > 100 && mouseX < 200 && mouseY > 100 && mouseY < 200) {
    fill(255, 255, 0, 255);
    rect(100, 100, 100, 100);
  }

  if (hokje1waarde == "x")
  {
    fill(255, 255, 255, 255);
    rect(100, 100, 100, 100);
  }


}

function mouseClicked() {
  if (mouseX > 100 && mouseX < 200 && mouseY > 100 && mouseY < 200) {
    hokje1waarde = "x"
  }
}
