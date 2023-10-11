const memberMiddleware = (req, res, next) => {
  const userInfo = JSON.parse(req.cookies.userInfo);

  if (userInfo) return next();

  res.redirect("/auth/login");
};

const guestMiddleware = (req, res, next) => {
  const userInfo = JSON.parse(req.cookies.userInfo);

  if (!userInfo) return next();

  res.redirect("/articles");
};

module.exports = { memberMiddleware, guestMiddleware };
