import jwt from "jsonwebtoken";

export function isAuth(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.send(false);
  } else {
    jwt.verify(token, process.env.TOKEN_SECRET, (err, data) => {
      if (err) {
        return res.send(false);
      } else {
        req.locals = { userInfo: data };
        next();
      }
    });
  }
}

export function isAdmin(req, res, next) {
  const userInfo = req.locals.userInfo;
  const role = userInfo.role;
  if (role === "admin") {
    next();
  } else {
    return res.status(403).send("Only admins can delete bookings");
  }
}
