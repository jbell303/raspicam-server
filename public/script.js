const button = document.querySelector('#button1');
const responseContainer = document.querySelector('#response-container');
var RaspiCam = require("raspicam");

button.addEventListener('click', function () {
	var camera = new RaspiCam({mode:photo, output: "~/Desktop/photo.jpg"});
	camera.start();
	console.log("taking picture"); 
});
