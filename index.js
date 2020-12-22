
// The time of the Fall Kickoff.
const deadline = 'January 4 2021 18:00:00 GMT-0700';

// Calculate the time remaining.
function getTimeRemaining(endtime) {
  const t = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor( (t/1000) % 60 );
  const minutes = Math.floor( (t/1000/60) % 60 );
  const hours = Math.floor( (t/(1000*60*60)) % 24 );
  const days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': appendZeroPerhaps(days),
    'hours': appendZeroPerhaps(hours),
    'minutes': appendZeroPerhaps(minutes),
    'seconds': appendZeroPerhaps(seconds)
  };
}

// Appends a zero in front of the number if less than 10.
function appendZeroPerhaps(num) {
  return ('0' + num).slice(-2);
}


// Set the time remaining.
function setTimeRemaining(time) {
  document.getElementById('days').innerText = time.days;
  document.getElementById('hours').innerText = time.hours;
  document.getElementById('minutes').innerText = time.minutes;
  document.getElementById('seconds').innerText = time.seconds;
}

// Just set the time remaining until the countdown.
const interval = setInterval(function() {
  const t = getTimeRemaining(deadline);
  setTimeRemaining(t);
  if (t.total <= 0) {
    clearInterval(interval);
  }
}, 1000);


// Initialize the pretty diamond background.
particlesJS.load('particles-js', 'particles.json');
