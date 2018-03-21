const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log('Server started! At http://localhost:' + port));