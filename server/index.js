const path = require('path');
const express = require('express')

const PORT = 8001

const app = express();
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