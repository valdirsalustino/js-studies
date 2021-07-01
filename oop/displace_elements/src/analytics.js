alert('Start Sending Analytics...');
console.log('Sending analytics...');

const intervalId = setInterval(() => {
	console.log('Sending Analytics data...');
}, 2000);


document.getElementById('stop-analytics-btn').addEventListener('click', () => {
  clearInterval(intervalId);
});