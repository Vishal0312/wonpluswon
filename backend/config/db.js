const mongoose = require('mongoose')
require('dotenv').config()
const connection = mongoose.connect(process.env.mongoDB)
module.exports = {
    connection
}

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2M2Q0YTY3YjJkMzU4ZTEzN2UwNDcwZGEiLCJpYXQiOjE2NzQ4ODA3NDR9.Vu1W7EcNRYyrVCO1fvWiGQz5-vpdNG7WYwW_XEpLSU8