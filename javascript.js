// idei de mic dejun
var breakfastIdeas = [
  'Oua ochiuri',
  'Omleta',
  'Paine cu unt si usturoi',
  'Paine cu nutella',
  'Sandwich',
  'Cereale cu lapte',
  'Cereale cu iaurt',
];

// idei de masa de pranz
var lunchIdeas = [
  'Paste cu rosii',
  'Paste cu branza',
  'Paste cu somon',
  'Ciorba de perisoare',
  'Aripioare la cuptor',
  'Cartofi prajiti',

];

// idei de cina
var dinnerIdeas = [
  'Paste cu rosii',
  'Paste cu branza',
  'Paste cu somon',
  'Ciorba de perisoare',
  'Aripioare la cuptor',
  'Cartofi prajiti',
];


function newBreakfast() {
  var randNum = Math.floor(Math.random() * breakfastIdeas.length);
  document.getElementById('mealChosen').innerHTML = breakfastIdeas[randNum];
}

function newDinner() {
  var randNum = Math.floor(Math.random() * lunchIdeas.length);
  document.getElementById('mealChosen').innerHTML = lunchIdeas[randNum];
}

function newLunch() {
  var randNum = Math.floor(Math.random() * dinnerIdeas.length);
  document.getElementById('mealChosen').innerHTML = dinnerIdeas[randNum];
}
