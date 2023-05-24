const bodyParser = require('body-parser');
const path = require('path');
const express = require('express')
const db = require('./queries')

const PORT = 8001

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../client/build')));


app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
  app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, ()=>{
    console.log(`server is lintenning on port ${PORT}`)
})


app.get('/contact', db.getContact)