import jwt from "jsonwebtoken";

export function isAuth(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(403).send("NOOOOOO");
  } else {
    jwt.verify(token, "SECRET", (err, data) => {
      if (err) {
        return res.status(403).send("U shall not pass");
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
    return res.status(403).send("Only admins can delete tasks");
  }
}
