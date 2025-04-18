const jwt = require("jsonwebtoken");

exports.authenticateToken = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];
  //console.log(token);
  //console.log(req.header("Authorization"));

  if (!token)
    return res.status(401).json({
      error: "Token não fornecido"
    });

  jwt.verify(token, process.env.JWT_SECRET, (err, usuario) => {

    if (err)
      return res.status(403).json({
        error: "Token inválido"
      });

    req.usuario = usuario;
    next();
  });

};
