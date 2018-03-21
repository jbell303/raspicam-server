const button = document.querySelector('#button1');
const responseContainer = document.querySelector('#response-container');

button.addEventListener('click', function () {
	responseContainer.innerHTML = 'Button clicked!';
});
