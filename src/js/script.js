let newYearsDay = new Date(new Date().getFullYear() + 1, 0, 1);

let $days = document.getElementById("days");
let $hours = document.getElementById("hours");
let $minutes = document.getElementById("minutes");
let $seconds = document.getElementById("seconds");

setInterval(function () {
  // Calculate the remaining time
  var now = new Date();
  var timeLeft = (newYearsDay - now) / 1000;
  updateClock(timeLeft);
}, 1000);

function updateClock(remainingTime) {
  // calculate (and subtract) whole days
  let days = Math.floor(remainingTime / 86400);
  remainingTime -= days * 86400;

  // calculate (and subtract) whole hours
  let hours = Math.floor(remainingTime / 3600) % 24;
  remainingTime -= hours * 3600;

  // calculate (and subtract) whole minutes
  let minutes = Math.floor(remainingTime / 60) % 60;
  remainingTime -= minutes * 60;

  // what's left is seconds
  let seconds = Math.floor(remainingTime % 60);

  // pad numbers if needed
  $days.innerHTML = padNumber(days);
  $hours.innerHTML = padNumber(hours);
  $minutes.innerHTML = padNumber(minutes);
  $seconds.innerHTML = padNumber(seconds);
}

function padNumber(number) {
  return number < 10 ? "0" + number : number;
}

