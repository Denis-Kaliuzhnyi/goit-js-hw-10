import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


let startDate = 0;
const btnStart = document.querySelector('[data-start]');
const inputWindow = document.querySelector('#datetime-picker');
const daysCountdown = document.querySelector('[data-days]');
const hoursCountdown = document.querySelector('[data-hours]');
const minutesCountdown = document.querySelector('[data-minutes]');
const secondsCountdown = document.querySelector('[data-seconds]');

btnStart.disabled = true;

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate < Date.now()) {
      displayErrorMessage('Please choose date in the future');
      selectedDates[0] = Date.now();
      btnStart.disabled = true;
    } else {
        startDate = selectedDate;
      btnStart.disabled = false;
    }
  },
});

btnStart.addEventListener('click', startCountdown);

function startCountdown() {
  btnStart.disabled = true;
  inputWindow.disabled = true;
  const timerId = setInterval(updateTimer, 1000);

  function updateTimer() {
    const diff = startDate - Date.now();
    if (diff <= 0) {
      clearInterval(timerId);
      resetTimerValues();
      return;
    }
    const { days, hours, minutes, seconds } = convertMs(diff);
    displayTimerValues(days, hours, minutes, seconds);
  }
}

function displayTimerValues(days, hours, minutes, seconds) {
  daysCountdown.textContent = addLeadingZero(days);
  hoursCountdown.textContent = addLeadingZero(hours);
  minutesCountdown.textContent = addLeadingZero(minutes);
  secondsCountdown.textContent = addLeadingZero(seconds);
}

function resetTimerValues() {
  displayTimerValues(0, 0, 0, 0);
}

function convertMs(ms) {
    const second = 1000;
    const minute = 60 * second;
    const hour = 60 * minute;
    const day = 24 * hour;
  
    return {
      days: Math.floor(ms / day),
      hours: Math.floor((ms % day) / hour),
      minutes: Math.floor((ms % hour) / minute),
      seconds: Math.floor((ms % minute) / second)
    };
  }
  
const addLeadingZero = value => {
  return value.toString().padStart(2, '0');
};

function displayErrorMessage(message) {
  iziToast.error({
    message: message,
  });
}
