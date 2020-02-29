const showClock = () => {
  // get the element to display on the page
  const clock = document.querySelector('#clock');

  // create the date object
  let currDate = new Date();

  // get the time
  let h = currDate.getHours();
  let m = currDate.getMinutes();
  let s = currDate.getSeconds();

  // format numbers
  m = m < 10 ? `0${m}` : m; 
  s = s < 10 ? `0${s}` : s;

  // insert the innerHTML
  clock.innerHTML = `${h}:${m}:${s}`;

  // this will update the clock every second
  setTimeout(showClock, 1000); 
}

showClock();