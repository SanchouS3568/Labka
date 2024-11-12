let userNumber = Number(prompt("Число:"));
let multiplesOfFive = [];
for (let i = 0; i <= userNumber; i++) {
  if (i % 5 === 0) {
    multiplesOfFive.push(i);
  }
}
if (multiplesOfFive.length > 0) {
  console.log("числа які діляться на 5:", multiplesOfFive.join(", "));
} else {
  console.log("Немає чисел");
}
