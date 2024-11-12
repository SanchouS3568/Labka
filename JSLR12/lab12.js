// Массив с изображениями
const images = document.querySelectorAll(".image-to-show");
let currentIndex = 0;
let intervalId = null;

// Функция для скрытия всех изображений
function hideAllImages() {
  images.forEach(img => img.style.display = 'none');
}

// Функция для показа текущего изображения
function showCurrentImage() {
  hideAllImages();
  images[currentIndex].style.display = 'block';
}

// Функция для переключения к следующему изображению
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showCurrentImage();
}

// Функция для запуска цикла показа изображений
function startSlideshow() {
  if (!intervalId) {  // Проверяем, если интервал еще не запущен
    intervalId = setInterval(nextImage, 3000);
  }
}

// Функция для остановки показа изображений
function stopSlideshow() {
  clearInterval(intervalId);
  intervalId = null;  // Сбрасываем intervalId для корректной работы возобновления
}

// Запуск показа при загрузке страницы
showCurrentImage();
startSlideshow();

// Добавляем кнопки и обрабатываем их события
const stopButton = document.createElement('button');
stopButton.innerText = 'Прекратить';
stopButton.onclick = stopSlideshow;

const resumeButton = document.createElement('button');
resumeButton.innerText = 'Возобновить показ';
resumeButton.onclick = startSlideshow;

// Добавляем кнопки в документ
document.body.appendChild(stopButton);
document.body.appendChild(resumeButton);
