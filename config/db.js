const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI)
    console.log(`mongoDB connected : ${connect.connection.host}`)
  } catch (e) {
    console.log(`Error: ${e.message}`)
    // process.exit(1)
  }
}

module.exports = connectDB