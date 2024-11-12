function displayArrayAsList(array) {
    const listItems = array.map(item => `<li>${item}</li>`).join('');
    
    const listContainer = document.getElementById('listContainer');
    listContainer.innerHTML = `<ul>${listItems}</ul>`;
}

function getUserInput() {
    const dataArray = [];
    let input;

    while (true) {
        input = prompt("Enter a value (type 'exit' to finish):");
        if (input === null || input.toLowerCase() === 'exit') {
            break;
        }
        dataArray.push(input);
    }
    
    return dataArray;
}

const userArray = getUserInput();

displayArrayAsList(userArray);
