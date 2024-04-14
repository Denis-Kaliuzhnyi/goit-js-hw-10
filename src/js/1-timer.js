import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const selectedDate = selectedDates[0];
      const currentDate = new Date();
  
      if (selectedDate < currentDate) {
        iziToast.error({
          title: 'Error',
          message: 'Please choose a date in the future',
        });
        document.querySelector('[data-start]').disabled = true;
      } else {
        document.querySelector('[data-start]').disabled = false;
      }
    },
  };
  
  flatpickr("#datetime-picker", options);
  
  function startTimer(endDate) {
    const timerInterval = setInterval(() => {
      const currentTime = new Date();
      const timeDifference = endDate - currentTime;
  
      if (timeDifference <= 0) {
        clearInterval(timerInterval);
        updateTimerUI({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
  
      const { days, hours, minutes, seconds } = convertMs(timeDifference);
      updateTimerUI({ days, hours, minutes, seconds });
    }, 1000);
  }
  
  function updateTimerUI({ days, hours, minutes, seconds }) {
    document.querySelector('[data-days]').textContent = addLeadingZero(days);
    document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
    document.querySelector('[data-minutes]').textContent = addLeadingZero(minutes);
    document.querySelector('[data-seconds]').textContent = addLeadingZero(seconds);
  }
  
  function addLeadingZero(value) {
    return value < 10 ? `0${value}` : value;
  }
  
  document.querySelector('[data-start]').addEventListener('click', () => {
    const selectedDate = new Date(flatpickr.parseDate(document.querySelector("#datetime-picker").value));
    document.querySelector('[data-start]').disabled = true;
    document.querySelector("#datetime-picker").disabled = true;
    startTimer(selectedDate);
  });