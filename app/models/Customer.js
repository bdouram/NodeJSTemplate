const Db = require('./Database')
class Customer{

    constructor(usuario){
        this.user = usuario
        this.mongo = new Db()
    }
    
    authenticateAndRun(req,res){
        this.mongo.db.connect(this.mongo.url,(err,client)=>{
            this.mongo.instance(client,'usuarios').find(this.user).toArray((err,docs)=>{
                if(docs[0]!=undefined){
                    client.close()
                    req.session.authorized = true
                    res.redirect('/dashboard') 
                } else{
                    client.close()
                    res.render('login/index',{erro:false,erroSenha:true});
                } 
            });
        });
    }

    set user(usuario){this._usuario = usuario}
    get user(){return this._usuario}
    set mongo(database){this._database = database}
    get mongo(){return this._database}
}

module.exports = Customer