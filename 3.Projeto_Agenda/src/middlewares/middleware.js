module.exports.locals = (req,res,next) =>{
  res.locals.errors = req.flash('errors');
  res.locals.success = req.flash('success');
  res.locals.session = req.session.user;
  next();
};

module.exports.errorHandler = (err, req, res,next) =>{
  if(err) {
    res.status(500);
    return res.render('404',{error:err});//eu sei q isso eh errado pf eu mudo dps, juro
  } 
};
module.exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};
module.exports.checkLogin = (req,res,next) => {
  if(!req.session.user){
    req.flash('error','You need to be logged in to access this page');
    res.redirect('/login');
    return;
  }
  else{
    next();
  }
}
  