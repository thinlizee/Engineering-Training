const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const router = express.Router();
const dataHandler = require('./dataHandler');

//connect the router to express app
app.use('/', router);
app.use(express.static('public'));

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

router.get('/getJiraTickets', (req, res) => {
  res.json({dataHandler:jirasObj});
});