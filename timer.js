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

    const time = Date.parse('2017-1-1') - Date.parse(new Date);
    if (time > 0) {
      const hours = Math.floor(time / (1000 * 60 * 60));
      timerWrapper.appendChild(timerHTML(hours, 'hours'));
      timerWrapper.innerHTML += "<div class='colon'> : </div>";

      const minutes = Math.floor((time / 1000 / 60) % 60);
      timerWrapper.appendChild(timerHTML(minutes, 'minutes'));
      timerWrapper.innerHTML += "<div class='colon'> : </div>";

      const seconds = Math.floor((time / 1000) % 60);
      seconds.className = "seconds"
      timerWrapper.appendChild(timerHTML(seconds, 'seconds'));

      timer.innerHTML = timerWrapper.innerHTML
    } else {
      timer.text = "HAPPY NEW YEAR"
      window.clearInterval(interval)
    }
  }, 1000);
};

module.exports = countdown;
