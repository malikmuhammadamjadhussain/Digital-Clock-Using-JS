function showTime() {
  let time = new Date();
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();
  let ampm = h >= 12 ? 'PM' : 'AM';

  h = h % 12 || 12; // Convert to 12-hour format
  m = m < 10 ? '0' + m : m; 
  s = s < 10 ? '0' + s : s; 

  document.getElementById('clock').innerHTML = h + ':' + m + ':' + s + ' ' + ampm;
}

setInterval(showTime, 1000);
showTime();