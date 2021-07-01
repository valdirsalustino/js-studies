const storeBtn = document.getElementById('store-btn');
const retriBtn = document.getElementById('retrieve-btn');

// about local storage (key-value);
const userId = 'u123';
const user = {
	name: 'Valdiola',
	age: 34,
	hobbies: ['Gamming', 'Beer', 'Wine']
}

storeBtn.addEventListener('click', () => {
	// add a new cookie 
	document.cookie = `uid=${userId}; max-age=2`;
	document.cookie = `user=${JSON.stringify(user)}`;
})

retriBtn.addEventListener("click", () => {
	const cookieData = document.cookie.split(';');
	const data = cookieData.map(it => {return it.trim()});
	console.log(data);
});