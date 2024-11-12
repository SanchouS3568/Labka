function filterBy(array, type) {
    return array.filter(item => {
        if (item === null) {
            return type !== 'object';
        }
        return typeof item !== type;
    });
}

function getUserInput() {
    const dataArray = [];
    let input;

    while (true) {
        input = prompt("Enter a value (type 'exit' to finish):");
        if (input === null || input.toLowerCase() === 'exit') {
            break;
        }
        dataArray.push(input === 'null' ? null : (isNaN(input) ? input : Number(input)));
    }

    const type = prompt("Enter the type of data to filter out (e.g., 'string', 'number', 'object', 'boolean'):");
    return { dataArray, type };
}

const { dataArray, type } = getUserInput();

const filteredArray = filterBy(dataArray, type);
console.log("Filtered array:", filteredArray);
