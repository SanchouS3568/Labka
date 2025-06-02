document.addEventListener('DOMContentLoaded', function() {
    const student = {
        name: '',
        lastName: '',
        tabel: {}
    };

    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const startButton = document.getElementById('startButton');
    const subjectSection = document.getElementById('subject-section');
    const subjectNameInput = document.getElementById('subjectName');
    const subjectGradeInput = document.getElementById('subjectGrade');
    const addSubjectButton = document.getElementById('addSubject');
    const cancelButton = document.getElementById('cancelButton');
    const resultSection = document.getElementById('result-section');
    const resultText = document.getElementById('resultText');

    startButton.addEventListener('click', function() {
        student.name = firstNameInput.value.trim();
        student.lastName = lastNameInput.value.trim();

        if (student.name && student.lastName) {
            document.getElementById('input-section').style.display = 'none';
            subjectSection.style.display = 'block';
        } else {
            alert("Будь ласка, введіть ім'я та прізвище студента.");
        }
    });

    addSubjectButton.addEventListener('click', function() {
        const subjectName = subjectNameInput.value.trim();
        const subjectGrade = parseInt(subjectGradeInput.value.trim());

        if (subjectName && !isNaN(subjectGrade) && subjectGrade >= 1 && subjectGrade <= 12) {
            student.tabel[subjectName] = subjectGrade;
            subjectNameInput.value = '';
            subjectGradeInput.value = '';
        } else {
            alert('Будь ласка, введіть коректну назву предмету та оцінку (від 1 до 12).');
        }
    });

    cancelButton.addEventListener('click', function() {
        finishAnalysis();
    });

    function finishAnalysis() {
        subjectSection.style.display = 'none';
        resultSection.style.display = 'block';

        const badGrades = Object.values(student.tabel).filter(grade => grade < 4).length;
        const averageGrade = Object.values(student.tabel).reduce((sum, grade) => sum + grade, 0) / Object.keys(student.tabel).length;

        let resultMessage = `Студент ${student.name} ${student.lastName}.<br>`;

        if (badGrades === 0) {
            resultMessage += 'Студент переведений на наступний курс.<br>';
        } else {
            resultMessage += `Кількість поганих оцінок (менше 4): ${badGrades}.<br>`;
        }

        if (averageGrade > 7) {
            resultMessage += 'Студенту призначена стипендія.';
        } else {
            resultMessage += 'Студенту не призначено стипендію.';
        }

        resultText.innerHTML = resultMessage;
    }
});