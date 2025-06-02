function calculate() {
    const speedInput = document.getElementById('speed').value;
    const backlogInput = document.getElementById('backlog').value;
    const deadlineInput = document.getElementById('deadline').value;

    const speeds = speedInput.split(',').map(Number);
    const backlog = backlogInput.split(',').map(Number);
    const deadline = new Date(deadlineInput);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const totalSpeed = speeds.reduce((acc, curr) => acc + curr, 0);
    const totalWork = backlog.reduce((acc, curr) => acc + curr, 0);

    let days = 0;
    let currentDate = new Date(today);
    while (totalWork > days * totalSpeed) {
        if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
            days++;
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }

    const finishDate = new Date(today);
    finishDate.setDate(finishDate.getDate() + days);

    if (finishDate <= deadline) {
        const daysBeforeDeadline = Math.ceil((deadline - finishDate) / (1000 * 60 * 60 * 24));
        document.getElementById('result').innerText = `Всі задачі будуть успішно виконані за ${daysBeforeDeadline} днів до настання дедлайну!`;
    } else {
        const overtimeHours = Math.ceil((totalWork - (days * totalSpeed)) / totalSpeed * 8);
        document.getElementById('result').innerText = `Команді розробників доведеться витратити додатково ${overtimeHours} годин після дедлайну, щоб виконати всі задачі в беклозі.`;
    }
}