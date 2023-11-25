// const express = require('express')
const express = require("express")
// const mongoose = require("mongoose")
const connectDB = require("./config/db.js")
const articleRouter = require("./routes/articles.js")
const { configDotenv } = require("dotenv")
const app = express()

configDotenv({ path: "./config/config.env" })

connectDB()
// mongoose.connect("mongodb://localhost/blog")

app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test Article",
      createdAt: new Date(),
      description: "Test description",
    },
    {
      title: "Test Article 2",
      createdAt: new Date(),
      description: "Test description 2",
    },
  ]
  res.render("articles/index", { articles: articles })
})

app.use("/articles", articleRouter)

app.listen(process.env.PORT)
