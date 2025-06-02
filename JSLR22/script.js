document.getElementById('drawButton').addEventListener('click', function() {
    this.remove();

    const input = document.createElement('input');
    input.type = 'number';
    input.placeholder = 'Введіть діаметр круга';
    input.id = 'diameterInput';

    const drawCirclesButton = document.createElement('button');
    drawCirclesButton.textContent = 'Нарисовать';
    drawCirclesButton.id = 'drawCirclesButton';

    document.getElementById('app').appendChild(input);
    document.getElementById('app').appendChild(drawCirclesButton);

    drawCirclesButton.addEventListener('click', function() {
        const diameter = parseInt(document.getElementById('diameterInput').value);
        if (isNaN(diameter) || diameter <= 0) {
            alert('Будь ласка, введіть коректний діаметр.');
            return;
        }

        input.remove();
        this.remove();

        const circlesContainer = document.createElement('div');
        circlesContainer.id = 'circlesContainer';
        document.getElementById('app').appendChild(circlesContainer);

        for (let i = 0; i < 100; i++) {
            const circle = document.createElement('div');
            circle.className = 'circle';
            circle.style.width = `${diameter}px`;
            circle.style.height = `${diameter}px`;
            circle.style.backgroundColor = getRandomColor();
            circlesContainer.appendChild(circle);
        }
    });
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById('app').addEventListener('click', function(event) {
    if (event.target.classList.contains('circle')) {
        event.target.remove();
        rearrangeCircles();
    }
});

function rearrangeCircles() {
    const circlesContainer = document.getElementById('circlesContainer');
    const circles = Array.from(circlesContainer.getElementsByClassName('circle'));
    circlesContainer.innerHTML = '';
    circles.forEach(circle => circlesContainer.appendChild(circle));
}