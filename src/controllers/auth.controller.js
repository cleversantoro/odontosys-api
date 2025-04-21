const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/usuario.model");
const Token = require("../models/token.model");

const generateTokens = (usuario) => {
  const accessToken = jwt.sign({ id: usuario.id, email: usuario.email }, process.env.JWT_SECRET, { expiresIn: "15m" });
  const refreshToken = jwt.sign({ id: usuario.id }, process.env.JWT_REFRESH_SECRET, { expiresIn: "7d" });
  return { accessToken, refreshToken };
};

exports.register = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    const hashedPassword = await bcrypt.hash(senha, 10);
    const usuario = await Usuario.create({ nome, email, senha: hashedPassword });
    res.status(201).json({ message: "Usuário registrado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao registrar usuário" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, senha } = req.body;
    const usuario = await Usuario.findOne({ where: { email } });

    //console.log(usuario);

    if (!usuario || !(await bcrypt.compare(senha, usuario.senha))) {
      return res.status(401).json({ error: "Credenciais inválidas" });
    }

    const { accessToken, refreshToken } = generateTokens(usuario);
    await Token.create({ userId: usuario.id, token: refreshToken, expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) });
    res.json({ accessToken, refreshToken });

  } catch (error) {
    //console.log(error);
    res.status(500).json({ error: "Erro ao fazer login" });
  }
};

exports.refreshToken = async (req, res) => {
  try {
    const { token } = req.body;
    console.log(token);

    if (!token) return res.status(401).json({ error: "Token necessário" });

    const storedToken = await Token.findOne({ where: { token } });
    console.log(storedToken);
    
    if (!storedToken) return res.status(403).json({ error: "Refresh Token inválido" });

    const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    const usuario = await Usuario.findByPk(decoded.id);

    const { accessToken, refreshToken } = generateTokens(usuario);

    storedToken.token = refreshToken;
    storedToken.expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    await storedToken.save();

    res.json({ accessToken, refreshToken });
  } catch (error) {
    res.status(500).json({ error: "Erro ao renovar token" });
  }
};

exports.logout = async (req, res) => {
  try {
    const { accessToken } = req.body;
    await Token.destroy({ where: { accessToken } });
    res.json({ message: "Logout realizado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao fazer logout" });
  }
};
