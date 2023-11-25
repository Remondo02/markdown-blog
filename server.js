const express = require("express")
const Article = require("./models/articles.js")
const connectDB = require("./config/db.js")
const articleRouter = require("./routes/articles.js")
const { configDotenv } = require("dotenv")
const methodOverride = require("method-override")
const app = express()

configDotenv({ path: "./config/config.env" })

connectDB()

app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: false }))
app.use(methodOverride("_method"))

app.get("/", async (req, res) => {
  const articles = await Article.find().sort({ createdAt: "desc" })
  res.render("articles/index", { articles: articles })
})

app.use("/articles", articleRouter)

app.listen(process.env.PORT)
