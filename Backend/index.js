const express = require('express')
const app = express()
require('dotenv').config();
const port = process.env.PORT

const {signUpUser} = require('./Schemas/Auth')
const mongoose = require("mongoose")
const cors = require("cors")


app.use(express.json())
app.use(cors())


signUpUser(app)


mongoose.connect(
    process.env.DATABASE_SERVER,
  ).then(res => console.log('("i am connected to mangoDB")')).catch(err => console.log(err))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))