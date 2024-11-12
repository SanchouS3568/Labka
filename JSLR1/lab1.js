
 // Запитуємо ім'я користувача
    const userName = prompt("Введіть ім'я:");

    // Запитуємо вік користувача
    const userAge = prompt("Введіть вік:");

    // Логіка перевірки віку користувача
    if (userAge < 18) {
        alert("Вам заборонено відвідувати цей сайт");
    } else if (userAge >= 18 && userAge <= 22) {
        const confirmation = confirm("Ви впевнені, що хочете продовжити?");
        if (confirmation) {
            alert("Ласкаво просимо, " + userName);
        } else {
            alert("Гл");
        }
    } else {
        alert("Ласкаво просимо, " + userName);
    }