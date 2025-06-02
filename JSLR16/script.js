const calculateButton = document.getElementById('calculateButton');
const resultElement = document.getElementById('result');

const getFactorial = (num) => {
    if (num === 0 || num === 1) return 1;
    return num * getFactorial(num - 1);
};

const getValidNumber = (message, defaultValue) => {
    let input;
    do {
        input = prompt(message, defaultValue);
        if (input === null) return null; // Если пользователь нажал "Отмена"
    } while (isNaN(input) || input.trim() === '');
    return Number(input);
};

calculateButton.addEventListener('click', () => {
    let number = getValidNumber("Введіть число для підрахунку факторіала:", "");
    
    if (number !== null) {
        const factorial = getFactorial(number);
        resultElement.textContent = `Факторіал числа ${number} дорівнює ${factorial}`;
    } else {
        resultElement.textContent = "Відміна.";
    }
});