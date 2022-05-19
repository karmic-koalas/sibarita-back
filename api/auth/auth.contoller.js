import authModel from "./auth.model.js";
import { compareSync, hashSync } from "bcrypt";
import jwt from "jsonwebtoken";

export async function login(req, res) {
  return authModel
    .findOne({ email: req.body.email })
    .then((userFound) => {
      if (!userFound) {
        return res.status(400).json({ message: "Usuario o contraseña incorrectos" });
      }
      if (!compareSync(req.body.password, userFound.password)) {
        return res.status(400).json({ message: "Usuario o contraseña incorrectos" });
      }

      // Genera el token de autenticación
      let token = jwt.sign(
        { email: userFound.email, role: "admin", auth: true, owner: userFound.owner },
        process.env.TOKEN_SECRET
      );
      const tokenObject = {
        token: token,
        owner: userFound.owner,
      };
      return res.json(tokenObject);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
}

export function create(req, res) {
  const { email, password } = req.body;
  return authModel
    .create({
      email: email,
      password: hashSync(password, 4),
    })
    .then((newUser) => {
      return res.send(newUser);
    });
}

export function getDataUser(req, res) {
  const user = req.locals.userInfo;

  if (user.auth && user.role === "admin") {
    return res.send(true);
  }
  return res.send(false);
}
