// const buttons = document.querySelectorAll('button'); 
const button = document.querySelector('button'); 

// button.onclick = function() {

// };

const buttonClickHandler = event => {
	// event.target.disabled = true;
	event.stopPropagation();
	console.log('Button was clicked.')
};

const divClickHandler = event => {
	console.log('DIV was CLICKED.');
};

button.addEventListener('click ', buttonClickHandler); 

div = document.querySelector('div');

div.addEventListener('mouseenter', divClickHandler);


// const anotherButtonClickHandler = () => {
// 	console.log('Button was clicked.');
// };

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;

// foundFn = buttonClickHandler.bind(this);

// button.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener("click", buttonClickHandler);
// }, 2000);

// buttons.forEach(btn => {
// 	btn.addEventListener('mouseenter', buttonClickHandler)
// });

// window.addEventListener("scroll", event => {
//   console.log(event);
// }); 

let curElementNumber = 0;

function scrollHandler() {
	const distanceToBottom = document.body.getBoundingClientRect().bottom;

	if (distanceToBottom < document.documentElement.clientHeight + 150){
		const newDataElement = document.createElement('div');
		curElementNumber++;
		newDataElement.innerHtml = `<p>Element ${curElementNumber}</p>`;
		document.body.append(newDataElement);
	}

};

window.addEventListener('scroll', scrollHandler);

const form = document.querySelector('form');

form.addEventListener('submit', event => {
	event.preventDefault();
	console.log(event);
});

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

list.addEventListener('click', event => {
			// event.target.classList.toggle('highlight');
			event.target.closest('li').classList.toggle('highlight');
			form.submit();
			// button.click();
	  }
);

// listtItems.forEach((listIt) => {
//   addEventListener("click", event => {
//     event.target.classList.toogle('highlight');
//   });
// });