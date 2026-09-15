let positie_x_van_blokje_1 = -100;
let positie_x_van_blokje_2 = 400;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  positie_x_van_blokje_1 += 10;
  positie_x_van_blokje_2 -= 10
  fill("green");
  square(positie_x_van_blokje_2, 100, 100 + -positie_x_van_blokje_1 / 5);
  fill("red");
  square(positie_x_van_blokje_1, 100, 100 + positie_x_van_blokje_1 / 5);
  if (positie_x_van_blokje_1 > 400) { positie_x_van_blokje_1 = -100 }
  if (positie_x_van_blokje_2 < -100) { positie_x_van_blokje_2 = 400 }
  //
  fill("white");
  for (let i = 0; i<10; i++)
  {
    rect(100*i,300,80,20);
  }
}
