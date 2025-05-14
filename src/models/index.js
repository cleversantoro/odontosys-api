const fs = require('fs');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');

// Cria a instância do Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME || 'odonto',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || 'root',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
  }
);

const db = {};
const modelsPath = path.join(__dirname);

// Primeiro, carrega todos os models
fs.readdirSync(modelsPath)
  .filter(file => file.endsWith('.model.js'))
  .forEach(file => {
    const modelFn = require(path.join(modelsPath, file));
    const model = modelFn(sequelize, DataTypes);
    db[model.name] = model;
  });

// Depois, roda setup de cada model se existir
fs.readdirSync(modelsPath)
  .filter(file => file.endsWith('.setup.js'))
  .forEach(file => {
    const setupFn = require(path.join(modelsPath, file));
    const baseName = file.split('.')[0];
    const model = db[Object.keys(db).find(k => k.toLowerCase().includes(baseName))];
    if (model) setupFn(model, db);
  });

// Aplica .associate se tiver
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
