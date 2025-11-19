let question = "Should I order pizza again today?";

const randomNumber = Math.floor(Math.random() * 8);

console.log(question);

if (randomNumber === 0) {
  console.log("Yes - definitely.");
}
else if (randomNumber === 1) {
  console.log("It is decidedly so.");
}
else if (randomNumber === 2) {
  console.log("Without a doubt.");
}
else if (randomNumber === 3) {
  console.log("Reply hazy, try again.");
}
else if (randomNumber === 4) {
  console.log("Ask again later.");
}
else if (randomNumber === 5) {
  console.log("Better not tell you now.");
}
else if (randomNumber === 6) {
  console.log("My sources say no.");
}
else if (randomNumber === 7) {
  console.log("Outlook not so good.");
}
else {
  console.log("Very doubtful.");
}