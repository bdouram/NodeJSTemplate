module.exports=function(app){
    app.get('/dashboard',(req,res)=>{
        if (req.session.authorized){
            app.app.controllers.dashboard.renderDashboard(app,req,res)
        }else{
            app.app.controllers.login.getLogin(app,req,res);
        }
    });
}
