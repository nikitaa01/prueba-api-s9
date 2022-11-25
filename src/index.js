const express = require('express')
const cors = require('cors')
const db = require('./databases/connect.js')

const app = express()
app.use(express.json())
app.use(cors())

require('dotenv').config()

db.createConnection()

app.use(require('./routes/register.route'))

app.listen(process.env.PORT, () => console.log(
    `My server is okett!!! on port ${process.env.PORT}`
))
