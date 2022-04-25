const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2022, 4, 21, 8, 30, 00);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
const date = futureDate.getDate();
let weekday = futureDate.getDay();
weekday = weekdays[weekday];

giveaway.textContent = `Giveaway ends on ${weekday}, ${date} ${months[month]} ${year} ${hours}:${minutes}am`;

// future time in milliseconds
const futureTime = futureDate.getTime();
console.log(futureTime);

function getRemainingTime() {
  const today = new Date().getTime();
  const dt = futureTime - today;
  // 1s = 1000ms
  // 1min = 60s
  // 1hr = 60min
  // 1d = 24hr

  //values in milliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // calculate all values
  let days = Math.floor(dt / oneDay);
  let hours = Math.floor((dt % oneDay) / oneHour);
  let minutes = Math.floor((dt % oneHour) / oneMinute);
  let seconds = Math.floor((dt % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return `0${item}`;
    }
    return item;
  }
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (dt < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class='expired'>Sorry, this giveaway has expired`;
  }
}
// countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
