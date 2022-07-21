module.exports = (role, redirectUrl = '/') => {
  return (req, res, next) => {
    switch (role) {
      case 'user':
        if (res.locals.user) {
          next();
        } else {
          res.redirect(redirectUrl);
        }
        return;
      case 'guest':
        if (!res.locals.user) {
          next();
        } else {
          res.redirect(redirectUrl);
        }
        return;
      default:
        res.redirect(redirectUrl);
        return;
    }
  };
};
