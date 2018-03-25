# raspicam-server
This project uses express to create a server listening on `port 5000` to use the raspberry pi camera module to take a picture in response to `GET` requests sent to the `photo` subdomain.
### Requirements
* A RaspberryPi with internet access such as a WiFi module or a pi-zeroW.
* A RaspberryPi camera module.
* `node.js` and `npm` installed.
#h3 Usage
`clone` the repository into a local directory on your raspberry pi. Start the server with the command `node app.js`. A message should appear, reading `Server listening on port 5000!`. To take a photo, make a `GET` request or enter `http://localhost:5000/photo` in a web browser. If a monitor is used, a preview screen will show briefly, then a file will be saved to the desktop using the filename `<date-time>.jpg`. Consider using a tunnel service such as [ngrok.io](https://ngrok.io) for access outside your local network.
