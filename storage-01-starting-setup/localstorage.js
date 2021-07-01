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
	localStorage.setItem('uid', userId);
	sessionStorage.setItem('user', JSON.stringify(user));
})

retriBtn.addEventListener("click", () => {
  const uid = localStorage.getItem("uid");
  const user = sessionStorage.getItem("user");
  if (uid && user) {
    console.log(uid);
    console.log(JSON.parse(user));
  } else {
    console.log("Could not get data!");
  }
});