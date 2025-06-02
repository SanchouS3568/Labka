function filterCollection(array, keywords, matchAll, ...fields) {
    const keywordList = keywords.split(' ').filter(Boolean);
    return array.filter(item => {
        return keywordList[matchAll ? 'every' : 'some'](keyword => {
            return fields.some(field => {
                const value = field.split('.').reduce((obj, key) => obj?.[key], item);
                return value?.toString().toLowerCase().includes(keyword.toLowerCase());
            });
        });
    });
}

function applyFilter() {
    const inputArray = document.getElementById('inputArray').value;
    const keywords = document.getElementById('keywords').value;
    const matchAll = document.getElementById('matchAll').checked;
    const fields = document.getElementById('fields').value.split(',').map(field => field.trim());

    try {
        const array = JSON.parse(inputArray);
        const result = filterCollection(array, keywords, matchAll, ...fields);
        document.getElementById('result').textContent = JSON.stringify(result, null, 2);
    } catch (error) {
        document.getElementById('result').textContent = 'Помилка: Невірний формат JSON';
    }
}