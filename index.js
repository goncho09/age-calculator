// INPUTS
const dayInput = document.getElementById('day-input');
const monthInput = document.getElementById('month-input');
const yearInput = document.getElementById('year-input');

//LABELS
const dayLabel = document.getElementById('label-day');
const monthLabel = document.getElementById('label-month');
const yearLabel = document.getElementById('label-year');

// TEXTO TO SHOW
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

// ERROR TEXTS
const errorDay = document.getElementById('dayError');
const errorMonth = document.getElementById('monthError');
const errorYear = document.getElementById('yearError');
const errorDayEmpty = document.getElementById('dayErrorEmpty');
const errorMonthEmpty = document.getElementById('monthErrorEmpty');
const errorYearEmpty = document.getElementById('yearErrorEmpty');

// CURRENT DATE
const date = new Date();
const currentDay = date.getDate();
const currentMonth = date.getMonth() + 1;
const currentYear = date.getFullYear();

const onClick = () => {
  if (
    isEmpty(dayInput, errorDayEmpty, dayLabel) &&
    isEmpty(monthInput, errorMonthEmpty, monthLabel) &&
    isEmpty(yearInput, errorYearEmpty, yearLabel)
  ) {
    if (
      isCorrectDate(dayInput.value, monthInput.value, yearInput.value) &&
      isCorrectDay(dayInput.value) &&
      isCorrectMonth(monthInput.value) &&
      isCorrectYear(yearInput.value)
    ) {
      let yearAge = currentYear - yearInput.value;
      let monthAge = currentMonth - monthInput.value;
      let dayAge = currentDay - dayInput.value;

      if (monthAge < 0 || (monthAge === 0 && dayAge < 0)) {
        yearAge--;
        if (monthAge === 0) {
          monthAge = 11;
          dayAge = 31 + dayAge;
        } else {
          monthAge = 11 + monthAge;
        }
      }

      day.innerHTML = dayAge;
      month.innerHTML = monthAge;
      year.innerHTML = yearAge;
    }
  }
  return;
};

dayInput.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    onClick();
  }
});
monthInput.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    onClick();
  }
});
yearInput.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    onClick();
  }
});

const isEmpty = (input, error, label) => {
  if (!input.value) {
    error.classList.add('show-error');
    input.classList.add('input-error');
    label.classList.add('label-error');
    return false;
  } else {
    error.classList.remove('show-error');
    input.classList.remove('input-error');
    label.classList.remove('label-error');
    return true;
  }
};

const isCorrectYear = (year) => {
  if (year > currentYear || year < 1900) {
    errorYear.classList.add('show-error');
    yearInput.classList.add('input-error');
    yearLabel.classList.add('label-error');
    return false;
  } else {
    errorYear.classList.remove('show-error');
    yearInput.classList.remove('input-error');
    yearLabel.classList.remove('label-error');
    return true;
  }
};

const isCorrectMonth = (month) => {
  if (month < 1 || month > 12 || month > currentMonth)  {
    errorMonth.classList.add('show-error');
    monthInput.classList.add('input-error');
    monthLabel.classList.add('label-error');
    return false;
  } else {
    errorMonth.classList.remove('show-error');
    monthInput.classList.remove('input-error');
    monthLabel.classList.remove('label-error');
    return true;
  }
};

const isCorrectDay = (day) => {
  if (day < 1 || day > 31 || day > currentDate) {
    errorDay.classList.add('show-error');
    dayInput.classList.add('input-error');
    dayLabel.classList.add('label-error');
    return false;
  } else {
    errorDay.classList.remove('show-error');
    dayInput.classList.remove('input-error');
    dayLabel.classList.remove('label-error');
    return true;
  }
};

const isCorrectDate = (day, month, year) => {
  if (
    (day > currentDay && month > currentMonth && year > currentYear) ||
    (day > 28 && month == 2)
  ) {
    errorDay.classList.add('show-error');
    dayInput.classList.add('input-error');
    dayLabel.classList.add('label-error');
    errorMonth.classList.add('show-error');
    monthInput.classList.add('input-error');
    monthLabel.classList.add('label-error');
    return false;
  } else {
    errorDay.classList.remove('show-error');
    dayInput.classList.remove('input-error');
    dayLabel.classList.remove('label-error');
    errorMonth.classList.remove('show-error');
    monthInput.classList.remove('input-error');
    monthLabel.classList.remove('label-error');
    return true;
  }
};
