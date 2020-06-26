const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect("mongodb://localhost:27017/producthuntapi", { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useFindAndModify: true, useUnifiedTopology: true })

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000)