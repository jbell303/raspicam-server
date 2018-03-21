const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
var path = require('path');
var RaspiCam = require('raspicam');
var d = new Date();
var dateTime = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + "-" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds(); 
var photo_path = `/home/pi/Desktop/${dateTime}.jpg`;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/photo', function (req, res) {
	var camera = new RaspiCam({mode: "photo", output: photo_path});
	console.log("taking picture");
	res.send("taking picture");
	camera.start();
})

app.listen(port, () => console.log('Server started! At http://localhost:' + port));
