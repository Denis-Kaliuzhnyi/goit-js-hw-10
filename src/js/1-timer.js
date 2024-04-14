
flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: Date.now(),
    minuteIncrement: 1,
  });
  
  // Оголошення змінних
  const startButton = document.getElementById('start-button');
  const daysElement = document.getElementById('days');
  const hoursElement = document.getElementById('hours');
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');
  let countdownInterval;
  
  // Функція для розрахунку та відображення часу
  function updateTimer() {
    const currentDate = new Date();
    const selectedDate = new Date(document.getElementById('datetime-picker').value);
    const difference = selectedDate - currentDate;
    if (difference <= 0) {
      clearInterval(countdownInterval);
      iziToast.error({
        title: 'Error',
        message: 'Time is up!'
      });
      return;
    }
  
    const seconds = Math.floor((difference / 1000) % 60);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const hours = Math.floor((difference / 1000 / 60 / 60) % 24);
    const days = Math.floor(difference / 1000 / 60 / 60 / 24);
  
    daysElement.textContent = formatTime(days);
    hoursElement.textContent = formatTime(hours);
    minutesElement.textContent = formatTime(minutes);
    secondsElement.textContent = formatTime(seconds);
  }
  
  // Функція для форматування часу (додавання нуля перед одноразовими числами)
  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
  
  // Обробник кліку на кнопці "Start"
  startButton.addEventListener('click', function() {
    countdownInterval = setInterval(updateTimer, 1000);
  });
  