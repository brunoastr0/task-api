const timeLabel = document.querySelector(".showTime");

const timeShower = () => {
  const date = new Date();

  const timeToday = date.getTime();

  var s = Math.floor(timeToday / 1000);
  var m = Math.floor(s / 60);
  var h = Math.floor(m / 60);
  var d = Math.floor(h / 24);

  h %= 24;
  m %= 60;
  s %= 60;

  h = h < 10 && h > 0 && h > -10 ? "0" + Math.abs(h) : h;
  m = m < 10 && m > 0 && m > -10 ? "0" + Math.abs(m) : Math.abs(m);
  s = s < 10 && s > 0 && s > -10 ? "0" + Math.abs(s) : Math.abs(s);

  const tempoR = `${h}:${m}:${s}`;
  timeLabel.innerHTML = tempoR;
  timeLabel.textContent = tempoR;

  setTimeout(timeShower, 1000);
};

timeShower();


