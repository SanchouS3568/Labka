function calculateFibonacci() {
    const f0 = parseInt(document.getElementById('f0').value, 10);
    const f1 = parseInt(document.getElementById('f1').value, 10);
    const n = parseInt(document.getElementById('n').value, 10);

    if (isNaN(f0) || isNaN(f1) || isNaN(n)) {
        alert("Некоректне число.");
        return;
    }

    const result = generalizedFibonacci(f0, f1, n);
    document.getElementById('result').innerText = `F${n} = ${result}`;
}

function generalizedFibonacci(F0, F1, n) {
    if (n === 0) return F0;
    if (n === 1) return F1;

    let a = F0, b = F1;
    for (let i = 2; i <= Math.abs(n); i++) {
        const temp = a + b;
        a = b;
        b = temp;
    }

    return n > 0 ? b : (n % 2 === 0 ? -b : b);
}