/* app.js
	a node.js server to run on a raspberry pi
	that takes a picture using a pi camera
	in response to a GET request to the /photo path
	James and Audrey Bell 2018
	*/

// import the necessary packages
const express = require('express');
const app = express();
const port = process.env.PORT || 5000; // server listening on port 5000
var path = require('path');
var RaspiCam = require('raspicam');

// look for resources in the 'public' sub-directory
app.use(express.static(path.join(__dirname, 'public')));

// response handler for requests to the /photo path
app.get('/photo', function (req, res) {
	// create a date object in order to create a unique filename "YYYY-MM-DD-HH_MM_SS.jpg"
	var d = new Date();
	var dateTime = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + "-" + d.getHours() + "_" + d.getMinutes() + "_" + d.getSeconds();
	var photo_path = `/home/pi/Desktop/${dateTime}.jpg`;

	// create the camera object
	var camera = new RaspiCam({mode: "photo", output: photo_path});
	console.log("taking picture");
	res.send("taking picture");
	camera.start(); // takes the picture
})

// open port 5000 and wait for request
app.listen(port, () => console.log('Server started! At http://localhost:' + port));
