module.exports.userInfo = (req,res) => {
    res.send("presta atenção:" + req.params.userId);
}