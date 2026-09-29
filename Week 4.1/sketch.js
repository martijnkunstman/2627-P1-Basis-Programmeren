
let mijnArrayX = [];
let mijnArrayY = [];
let mijnArraySize = [];

function setup() {
  createCanvas(1000, 800);
  for (let i = 0; i < 200; i = i + 1) {
    mijnArrayX.push(random(0, 1000));
    mijnArrayY.push(random(0, 1000));
    mijnArraySize.push(int(random(5, 150)));
  }
  mijnArraySize.sort(function (a, b) {
    return a - b;
  });
  console.log(mijnArraySize);

}

function draw() {
  background(220);
  fill(255, 255, 255, 200);
  for (i = 0; i < mijnArrayX.length; i++) {
    mijnArrayY[i] = mijnArrayY[i] - mijnArraySize[i] / (mouseY/10);
    circle(mijnArrayX[i], mijnArrayY[i], mijnArraySize[i]);
    if (mijnArrayY[i] < 0) {
      mijnArrayY[i] = 800;
    }
  }
}

function keyPressed() {
  mijnArrayX = [];
  mijnArrayY = [];
  mijnArraySize = [];
  mijnArraySpeed = [];
  for (let i = 0; i < 200; i = i + 1) {
    mijnArrayX.push(random(0, 1000));
    mijnArrayY.push(random(0, 1000));
    mijnArraySize.push(int(random(5, 150)));
  }
  mijnArraySize.sort(function (a, b) {
    return a - b;
  });
}
