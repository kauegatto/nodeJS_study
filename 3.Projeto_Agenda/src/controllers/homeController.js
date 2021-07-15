module.exports.index = (req,res) =>
{
    if(req.session.user){
        res.render('index');
    }
    else{
        req.flash('error','You need to be logged in to access this page');
        res.redirect('/login');
    }
}
