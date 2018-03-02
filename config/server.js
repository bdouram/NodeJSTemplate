const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const expressSession = require('express-session')
const app = express()
app.set('view engine','ejs')
app.set('views','./app/views')

app.use(bodyParser.urlencoded({extended:true}))
app.use(expressValidator())
app.use(express.static('./app/public'))
app.use(expressSession({
    secret:'+)9IwW3&e]3b^/dJA}e~=jk5woK-I2!LV/j"S<tZ[E$EJ2LVP_GJe</rgKgJ|P8',
    resave:false,
    saveUninitialized:false
}))

consign().include('app/routes') // rotas global
         .then('app/controllers') //controllers (regras de negocio)
         .into(app)// models(app/models)

module.exports = app