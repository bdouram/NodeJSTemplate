module.exports=function(app){
    app.get('/',function(req,res){
        app.app.controllers.login.getLogin(app,req,res);
    });
    app.post('/',function(req,res){
        app.app.controllers.login.postLogin(app,req,res);
    })
}
