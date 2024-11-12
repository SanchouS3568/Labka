const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;
const header = document.querySelector('header');
const content = document.querySelector('.content');
const footer = document.querySelector('footer');
const navLinks = document.querySelectorAll('nav ul li a');
const buttons = document.querySelectorAll('.btn');

// Функция для применения темы
function applyTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-theme');
        header.classList.add('dark-theme');
        content.classList.add('dark-theme');
        footer.classList.add('dark-theme');
        navLinks.forEach(link => link.classList.add('dark-theme'));
        buttons.forEach(btn => btn.classList.add('dark-theme'));
    } else {
        body.classList.remove('dark-theme');
        header.classList.remove('dark-theme');
        content.classList.remove('dark-theme');
        footer.classList.remove('dark-theme');
        navLinks.forEach(link => link.classList.remove('dark-theme'));
        buttons.forEach(btn => btn.classList.remove('dark-theme'));
    }
}

// Проверяем сохраненную тему при загрузке страницы
const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

// Обработчик нажатия на кнопку переключения темы
themeToggleButton.addEventListener('click', () => {
    const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
});
