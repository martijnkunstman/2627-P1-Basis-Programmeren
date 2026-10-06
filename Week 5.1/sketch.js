

let vragen_array = ["Dit is vraag 0"];
vragen_array.push("DIt is vraag 1.");
vragen_array.push("DIt is vraag 2.");
vragen_array.push("DIt is vraag 3.");
vragen_array.push("Hoeveel is 2 + 2");

let deze_vraag_is_nu_actief = 0;
let volgende_vraag; //knop
let vorige_vraag; //knop

console.log(vragen_array);


function setup() {
  createCanvas(400, 400);
  //
  volgende_vraag = createButton('toon de volgende vraag');
  volgende_vraag.position(200, 300);
  volgende_vraag.mousePressed(functie_volgende_vraag);
  //
  vorige_vraag = createButton('toon de vorige vraag');
  vorige_vraag.position(10, 300);
  vorige_vraag.mousePressed(functie_vorige_vraag);
}

function draw() {
  background(220);
  //controleer welke knoppen niet in beeld moeten komen
  if (deze_vraag_is_nu_actief==0)
  {
    vorige_vraag.hide();
  }
    if (deze_vraag_is_nu_actief==vragen_array.length-1)
  {
    volgende_vraag.hide();
  }
  text(vragen_array[deze_vraag_is_nu_actief],20,20);
}

function functie_volgende_vraag() {
  deze_vraag_is_nu_actief = deze_vraag_is_nu_actief + 1;
  //toon altijd de vorige knop als je op de volgende klikt
  vorige_vraag.show();
}

function functie_vorige_vraag() {
  deze_vraag_is_nu_actief = deze_vraag_is_nu_actief - 1;
  //toon altijd de vorige knop als je op de volgende klikt
  volgende_vraag.show();
}
