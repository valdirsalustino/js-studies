const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');

function sendHttpRequest(method, url, data=null) {
  // const promise = new Promise((resolve, reject) => {
  //   const xhr = new XMLHttpRequest();

  //   // no network is open at this point;
  //   // open for configure requests.
  //   xhr.open(method, url);

  //   xhr.responseType = "json";

  //   xhr.onload = function () {
	// 		if (xhr.status >= 200 && xhr.status < 300) {
  //       resolve(xhr.response);
  //     } else {
	// 			reject(new Error('Something went wrong!'));
	// 		}
	// 	};

	// 	xhr.onerror = function() {
	// 		reject(new Error('Failed to send request!'));
	// 	}

	// 	xhr.send(JSON.stringify(data));


	// });
	// return promise;

	// if (data) {
	//   // const parsedData = JSON.stringify(data);
	//   const parsedData = data;
	// } else {
	// 	parsedData = null;
	// }

	// fetch returns a promise by default. 
	return fetch(url, {
    method: method,
		body: data,
		// headers: {
		// 	'Content-Type': 'application/json',
		// }
  }).then(response => {
		if (response.status >= 200 && response.status < 300) {
      return response.json();
		} else {
			return response.json().then((errorData) => {
				console.log(errorData)
        throw new Error("Something went wrong - server-side.");
      });
		}

  }).catch(error => {
		console.log(error);
		throw new Error('Something went wrong!');
	});
}

async function fetchPosts() {
	try {
    const responseData = await sendHttpRequest(
      "GET",
      "https://jsonplaceholder.typicode.com/posts"
		);
    const listOfPosts = responseData;
    for (const post of listOfPosts) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector("h2").textContent = post.title.toUpperCase();
      postEl.querySelector("p").textContent = post.body;
      postEl.querySelector("li").id = post.id;
      listElement.append(postEl);
    }
  } catch (error) { 
		alert(error.message);
	}
}

async function createPost(title, content) {
  const userId = Math.random();

  const post = {
    title: title,
    body: content,
    id: userId,
	};
	
	const fd = new FormData();
	fd.append('title', title);
	fd.append('content', content);
	fd.append('userId', userId);

	sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", fd);
	// sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", post);
}

fetchButton.addEventListener('click', fetchPosts);

form.addEventListener('submit', event => {
	// avoid page to reload when submit the form
	event.preventDefault();
	const enteredTitle = event.currentTarget.querySelector('#title').value;
	const enteredContent = event.currentTarget.querySelector('#content').value;
	createPost(enteredTitle, enteredContent);
})

// in this case we will add event listener only on ul 
// and leverage on event delegation to listener to 
// all li belonging to ul;
postList.addEventListener('click', event => {
	if (event.target.tagName === 'BUTTON') {
		const postId = event.target.closest('li').id;
		console.log(postId);
		sendHttpRequest('DELETE', `https://jsonplaceholder.typicode.com/posts/${postId}`);
	}
});