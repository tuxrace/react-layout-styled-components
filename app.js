const express = require('express')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
const app = express()

const router = express.Router()
router.route("/");
router.get("*", (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`)
})

app.use(webpackDevMiddleware(webpack(webpackConfig),{
  publicPath: '/'
}));  

app.use("/", router)

module.exports = app
