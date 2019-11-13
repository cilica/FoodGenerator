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

function newBreakfast() {
  var randNum = Math.floor(Math.random() * 8) + 1;
  document.getElementById('mealChosen').innerHTML = breakfastIdeas[randNum];
}
