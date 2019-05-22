const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./configs/config')


mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err) }
)

const app = express()
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Listening on port ' + port);
})
