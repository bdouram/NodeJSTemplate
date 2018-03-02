'use strict';

function invalidForm(req) {
    const dataForm = req.body
    req.assert('username','Insira um username válido.').notEmpty()
    req.assert('password','Insira um password válido.').notEmpty()
    return req.validationErrors()
}

module.exports.getLogin = function(app,req,res){ 
    res.render('login/index',{erro:false,erroSenha:false})
}

module.exports.postLogin = function(app,req,res){
    // When our user try to log into our system.
    if(invalidForm(req)){
        res.render('login/index',{erro:true,erroSenha:false})
    }else {
        const Customer = require('../models/Customer');
        const user = new Customer(req.body)
        user.authenticateAndRun(req,res)
    }
}

