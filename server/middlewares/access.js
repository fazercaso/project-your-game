module.exports = (role, status = 500) => {
  return (req, res, next) => {
    switch (role) {
      case 'user':
        if (res.locals.user) {
          next();
        } else {
          res.status(401).json({ message: 'Unauthorized!' });
        }
        return;
      case 'guest':
        if (!res.locals.user) {
          next();
        } else {
          res.status(406).json({ message: 'Not acceptable!' });
        }
        return;
      default:
        res.status(status).end();
        return;
    }
  };
};
