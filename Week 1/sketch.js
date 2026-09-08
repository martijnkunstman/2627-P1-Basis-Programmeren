/*

11111111
10000001
10022001
10022001
10000001
11111111

*/

let rij1 = [1, 1, 1, 1, 1, 1, 1, 1];
let rij2 = [1, 2, 0, 3, 3, 0, 2, 1];
let rij3 = [1, 0, 0, 2, 2, 0, 0, 1];

let posy = 0;

let rijen = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 2, 2, 0, 0, 1],
  [1, 0, 2, 3, 3, 2, 0, 1],
  [1, 0, 2, 3, 3, 2, 0, 1],
  [1, 0, 0, 2, 2, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],

];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill("yellow");
  circle(mouseX,mouseY,100);

  posy++;
  if (posy>100)
  {
    posy = 0;
  }

  fill("black");

  // for (let i = 0; i < rij2.length; i++) {
  //   text(rij2[i], 30 * i, 10)
  //   if (rij2[i] == 0) {
  //     fill("white");
  //   }
  //   if (rij2[i] == 1) {
  //     fill("black");
  //   }
  //   if (rij2[i] == 2) {
  //     fill("red");
  //   }
  //   if (rij2[i] != 3) {
  //     square(100 + i * 22, 100, 20);
  //   }
  // }
  // //--------------
  // for (let i = 0; i < rij3.length; i++) {
  //   text(rij3[i], 30 * i, 10)
  //   if (rij3[i] == 0) {
  //     fill("white");
  //   }
  //   if (rij3[i] == 1) {
  //     fill("black");
  //   }
  //   if (rij3[i] == 2) {
  //     fill("red");
  //   }
  //   square(100 + i * 22, 122, 20);
  // }
  ///---------------rijen
  strokeWeight(0);
  for (let y = 0; y < rijen.length; y++) {
    for (let x = 0; x < rijen[y].length; x++) {
      if (rijen[y][x] == 0) {
        fill("white");
      }
      if (rijen[y][x] == 1) {
        fill("black");
      }
      if (rijen[y][x] == 2) {
        fill("red");
      }
      if (rijen[y][x] != 3) {
        square(100 + x * 18, 100 + y * 18 + posy, 18);
      }
    }
  }
  ///-------------------


}

