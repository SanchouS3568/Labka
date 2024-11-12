function calculate(num1, num2, operation) {
  let result;
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        console.log("Помилка: ділення на нуль неможливе!");
        return;
      }
      result = num1 / num2;
      break;
    default:
      console.log("Некоректна операція!");
      return;
  }

  console.log(`Результат операції ${num1} ${operation} ${num2} = ${result}`);
}

let num1 = parseFloat(prompt("Введіть перше число:"));
let num2 = parseFloat(prompt("Введіть друге число:"));
let operation = prompt("Введіть математичну операцію (+, -, *, /):");

calculate(num1, num2, operation);
