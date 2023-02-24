const express = require('express')
const path = require('path');
const app = express()
const port = 3000
require('dotenv').config()

app.use('/assets', express.static('assets'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.listen(port, () => {
  console.log(`App listening at https://127.0.0.1:${port}...`)
})