const PORT = process.env.PORT || 5000;
const express = require('express');
const cors = require('cors');
const path = require('path');

const appPath = path.join(__dirname, "../public/index.html");

require('dotenv').config();

// server config
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use("ui", express.static(appPath))


// routing stuff comes here, extract to somewhere else.
app.get('/', function (req, res) {
res.sendFile(appPath)
})

// run the server
app.listen(PORT, () => {
console.log(`server is running on port ${PORT}`);
});