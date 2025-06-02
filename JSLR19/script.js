function cloneObject() {
    const input = document.getElementById('inputObject').value;
    let originalObj;
    try {
        originalObj = JSON.parse(input);
    } catch (e) {
        originalObj = input;
    }

    const clonedObj = deepClone(originalObj);
    document.getElementById('outputResult').textContent = JSON.stringify(clonedObj, null, 2);
}

function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }

    let clonedObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(obj[key]);
        }
    }
    return clonedObj;
}