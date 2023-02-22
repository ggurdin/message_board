const express = require('express')
const path = require('path');
const app = express()
const port = 3000
require('dotenv').config()
// const { auth } = require('express-openid-connect');
// app.use(
//   auth({
//     issuerBaseURL: process.env.ISSUER_BASE_URL,
//     baseURL: process.env.BASE_URL,
//     clientID: process.env.CLIENT_ID,
//     secret: process.env.SECRET
//   })
// );

app.use('/assets', express.static('assets'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/home', (req, res) => {
    res.send("logged in!")
})

// app.get('/api/open', function(req, res) {
//     console.log("/api/open");
//     res.json({
//         message: "Open Endpoint"
//     });
// });

// app.get('/api/members-only', function(req, res){
//     console.log("/api/members-only")
//     res.json({
//         message: 'Members Only Endpoint'
//     });
// })

// app.get('/api/protected', function(req, res) {
//     console.log("/api/protected")
//     res.json({
//         message: 'Protected Endpoint'
//     });
// });

app.listen(port, () => {
  console.log(`App listening at https://127.0.0.1:${port}...`)
})