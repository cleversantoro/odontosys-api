const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user.model");
const Token = require("../models/token.model");
const { sequelize } = require("../config/database");

const generateTokens = (user) => {
  const accessToken = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "15m" });
  const refreshToken = jwt.sign({ id: user.id }, process.env.JWT_REFRESH_SECRET, { expiresIn: "7d" });
  return { accessToken, refreshToken };
};

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });
    res.status(201).json({ message: "Usuário registrado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao registrar usuário" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Credenciais inválidas" });
    }

    const { accessToken, refreshToken } = generateTokens(user);

    await Token.create({ userId: user.id, token: refreshToken, expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) });

    res.json({ accessToken, refreshToken });
  } catch (error) {
    res.status(500).json({ error: "Erro ao fazer login" });
  }
};

exports.refreshToken = async (req, res) => {
  try {
    const { token } = req.body;
    if (!token) return res.status(401).json({ error: "Token necessário" });

    const storedToken = await Token.findOne({ where: { token } });
    if (!storedToken) return res.status(403).json({ error: "Refresh Token inválido" });

    const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    const user = await User.findByPk(decoded.id);

    const { accessToken, refreshToken } = generateTokens(user);

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
    const { token } = req.body;
    await Token.destroy({ where: { token } });
    res.json({ message: "Logout realizado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao fazer logout" });
  }
};
