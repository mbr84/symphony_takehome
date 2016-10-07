const formatTime = (time) => {
  return time > 9 || time !== 0 ? time : '0' + time;
};

const timerHTML = (time, unit) => {
  const html = document.createElement('div');
  html.innerHTML = `
  <div class='unit-wrapper'>
    <div class='time'>${time}</div>
    <div class='unit'>${unit}</div>
  </div>
  `;

  return html
};

const countdown = () => {
  const interval = setInterval(function () {
    const timerWrapper = document.createElement('div');
    const timer = document.getElementById('timer');
    const colon = document.createElement('div')

    const time = Date.parse('2017-1-1') - Date.parse(new Date);
    const hours = formatTime(Math.floor(time / (1000 * 60 * 60)));
    timerWrapper.appendChild(timerHTML(formatTime(hours), 'hours'));
    timerWrapper.innerHTML += "<div class='colon'> : </div>";

    const minutes = formatTime(Math.floor((time / 1000 / 60) % 60));
    timerWrapper.appendChild(timerHTML(formatTime(minutes), 'minutes'));
    timerWrapper.innerHTML += "<div class='colon'> : </div>";

    const seconds = formatTime(Math.floor((time / 1000) % 60));
    timerWrapper.appendChild(timerHTML(formatTime(seconds), 'seconds'));

    timer.innerHTML = timerWrapper.innerHTML
  }, 1000);
};

module.exports = countdown;
