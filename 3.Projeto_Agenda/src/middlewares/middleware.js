module.exports.errorHandler = (err, req, res,next) =>{
  if(err) {
    res.status(500);
    return res.render('404',{error:err});//eu sei q isso eh errado pf eu mudo dps, juro
  } 
};
  
module.exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');

    next();
};
  