
let mijnArrayX = [];
let mijnArrayY = [];
let mijnArraySize = [];
let mijnArraySpeed = [];

function setup() {
  createCanvas(500, 500);

  for (let i = 0; i < 100; i = i + 1) {
    mijnArrayX.push(random(0,500));
    mijnArrayY.push(random(0,500));
    mijnArraySize.push(random(20,70));
    mijnArraySpeed.push(random(1,5));
  }
}   

function draw() {
  background(220);
  fill(255,255,255,100);
  for(i=0;i<mijnArrayX.length;i++)
  {
    mijnArrayY[i]=mijnArrayY[i]-mijnArraySpeed[i]

    circle(mijnArrayX[i],mijnArrayY[i],mijnArraySize[i]);
    if (mijnArrayY[i]<0)
    {
      mijnArrayY[i] = 500;
    }

  }
}

function keyPressed()
{
  mijnArrayX = [];
  mijnArrayY = [];
  mijnArraySize = [];
  mijnArraySpeed = [];
  for (let i = 0; i < 100; i = i + 1) {
    mijnArrayX.push(random(0,500));
    mijnArrayY.push(random(0,500));
    mijnArraySize.push(random(20,70));
    mijnArraySpeed.push(random(1,5));
  }
}
