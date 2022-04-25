const userInput = Number(prompt("Please enter a number from 1 to 12  :"));
if (userInput === 1) {
  console.log(
    `You entered ${userInput} and its correspondant month is January `
  );
} else if (userInput === 2) {
  console.log(
    `You entered ${userInput} and its correspondant month is february `
  );
} else if (userInput === 3) {
  console.log(`You entered ${userInput} and its correspondant month is Marc `);
} else if (userInput === 4) {
  console.log(`You entered ${userInput} and its correspondant month is April `);
} else if (userInput === 5) {
  console.log(`You entered ${userInput} and its correspondant month is May `);
} else if (userInput === 6) {
  console.log(`You entered ${userInput} and its correspondant month is June `);
} else if (userInput === 7) {
  console.log(`You entered ${userInput} and its correspondant month is July `);
} else if (userInput === 8) {
  console.log(
    `You entered ${userInput} and its correspondant month is August `
  );
} else if (userInput === 9) {
  console.log(
    `You entered ${userInput} and its correspondant month is Septembre `
  );
} else if (userInput === 10) {
  console.log(
    `You entered ${userInput} and its correspondant month is October `
  );
} else if (userInput === 11) {
  console.log(
    `You entered ${userInput} and its correspondant month is November `
  );
} else if (userInput === 12) {
  console.log(
    `You entered ${userInput} and its correspondant month is December `
  );
} else {
  alert`The number you entered does not correspond to any month`;
}
