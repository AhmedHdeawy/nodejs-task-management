const mongoose = require('mongoose')

const dbConnection = (URL) => {
    return mongoose.connect(URL)
    .then(() => console.log("connected to DB"))
    .catch((err) => console.log("DB connection error ", err))
}

module.exports = dbConnection