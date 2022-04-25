let tomMass = 8;
let tomHeight = 9;
let jerryMass = 45;
let jerryHeight = 10;
function calcBmi(height, mass) {
  return mass / height ** 2;
}
let jerryBmi = calcBmi(jerryMass, jerryHeight);
let tomBmi = calcBmi(tomMass, tomHeight);
console.log(`Jerry's BMI is ${jerryBmi}`);
console.log(`Tom's BMI is ${tomBmi}`);
let theHigherBmi = tomBmi > jerryBmi ? true : false;
console.log(
  `Is Tom's BMI higher than Jerry's BMI ? the answer is ${theHigherBmi}`
);
