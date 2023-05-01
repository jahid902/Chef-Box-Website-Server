const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000 ;

const chefsData = require("./data/chefsData.json")
app.use(cors());

app.get('/', (req, res) => {
  res.send('chef server running')
})

app.get('/chefs', (req,res) => {
    res.send(chefsData);
})

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const selectedChef = chefsData.find(data => data.id == id);
    res.send(selectedChef)
})

app.listen(port, () => {
  console.log(`server running on port: ${port}`)
})