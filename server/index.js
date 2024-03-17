const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv').config()

const feedbackRoute = require('./routes/feedbackRoutes')
const breachRoute = require('./routes/breachRoutes')

const app = express()
const port = 3000

mongoose.connect(process.env.mongoString).then(() => {
    console.log('DB connection successful')
})

app.use(cors({ origin: '*' }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('hello world')
})

app.use('/', feedbackRoute)
app.use('/', breachRoute)

app.post('/', (req, res) => {
    res.send('post request to home page')
})

app.listen(port, () => {
    console.log('listening on port 3000')
})
