const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')
// const multer = require('multer')
require('dotenv').config()


const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.set('view engine', 'ejs')


const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDb Connection successful on prokart app")
})
const phonesRouter = require('./routes/phones')
const commentsRouter = require('./routes/comments')

app.use('/api/phones', phonesRouter)
app.use('/api/comments', commentsRouter)


app.use(express.static(path.join(__dirname, 'client/build')))
// If no API routes are hit, send the React app
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, 'client/build/index.html'));
});


app.listen(port, () => {``
    console.log(`Server is running on Port: ${port}`)
})

