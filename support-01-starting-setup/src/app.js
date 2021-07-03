import 'core-js/features/promise';

const button = document.querySelector('button');
const textParagraph = document.querySelector('p');

button.addEventListener('click', () => {
  const text = textParagraph.textContent;
  // using feature selection!
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    console.log('Clipboard api not avaliable! Here goes the fallback code!');
  }
});