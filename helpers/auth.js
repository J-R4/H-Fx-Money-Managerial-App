module.exports = (req, res, next) => {
    if (req.session.user) {
        console.log(req.session.user, '<<<<<< ini dari if');
        next();
    } else {
        console.log(req.session.user, 'ini dari else');
        res.redirect('/login');
    }
};
