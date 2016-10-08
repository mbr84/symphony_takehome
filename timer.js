const formatTime = (time) => {
  return (time < 10 ? "0" + time : time)
};

const timerHTML = (time, unit) => {
  const html = document.createElement('div');
  html.innerHTML = `
  <div class='${unit}'>
    <div class='time'>${formatTime(time)}</div>
    <div class='unit'>${unit.toUpperCase()}</div>
  </div>
  `;
  if (unit === "seconds") { html.class = "unit-wrapper seconds"; }
  return html;
};

const countdown = () => {
  const interval = setInterval(function () {
    const timerWrapper = document.createElement('div');
    const timer = document.getElementById('timer');
    const timeLeft = Date.parse("1-1-2017") - Date.parse(new Date);

    if (timeLeft > 0) {
      const hours = Math.floor(timeLeft / (1000 * 60 * 60));
      timerWrapper.appendChild(timerHTML(hours, 'hours'));
      timerWrapper.innerHTML += "<div class='colon'> : </div>";

      const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
      timerWrapper.appendChild(timerHTML(minutes, 'minutes'));
      timerWrapper.innerHTML += "<div class='colon'> : </div>";

      const seconds = Math.floor((timeLeft / 1000) % 60);
      seconds.className = 'seconds';
      timerWrapper.appendChild(timerHTML(seconds, 'seconds'));
    } else {
      timerWrapper.innerHTML = `<div class="time seconds">HAPPY NEW YEAR!</div>`;
    }
    timer.innerHTML = timerWrapper.innerHTML;
  }, 1000);
};

module.exports = countdown;
