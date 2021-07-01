const storeBtn = document.getElementById('store-btn');
const retriBtn = document.getElementById('retrieve-btn');

let db; 

// about local storage (key-value);
const userId = 'u123';
const user = {
	name: 'Valdiola',
	age: 34,
	hobbies: ['Gamming', 'Beer', 'Wine']
}

const dbRequest = indexedDB.open('StorageDummy', 1);

dbRequest.onsuccess = function(event) {
	db = event.target.result;
};

dbRequest.onupgradeneeded = function(event) {
	db = event.target.result;
	const objStore = db.createObjectStore('products', {keyPath: 'id'});

	objStore.transaction.oncomplete = function(event) {

		const productsStore = db
      .transaction("products", "readwrite")
			.objectStore("products");

		productsStore.add({
      id: "p1",
      title: "A first Product",
      price: 19.99,
      tags: ["Expensive", "Luxury", "Joy"],
    });

	}
};

dbRequest.onerror = function(event) {
	console.log('ERROR!');
};

storeBtn.addEventListener("click", () => {
  if (!db) {
    return;
  }
  const productsStore = db
    .transaction("products", "readwrite")
    .objectStore("products");

  productsStore.add({
    id: "p2",
    title: "A second Product",
    price: 99.99,
    tags: ["Expensive", "Luxury", "Sex"],
  });
});

retriBtn.addEventListener("click", () => {

  const productsStore = db
    .transaction("products", "readwrite")
		.objectStore("products");
	const request = productsStore.get('p2');

	request.onsuccess = function() {
		console.log(request.result);
	};

});