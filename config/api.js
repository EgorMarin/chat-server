const express = require('express')
const cors = require('cors')
const morganLogger = require('morgan')

module.exports = (app) => {
  app.use(cors())
  app.use(morganLogger('dev'))
  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())
  app.use(express.static('public'))
}