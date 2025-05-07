const fs = require('fs');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');

// Cria a instância do Sequelize
const sequelize = new Sequelize('odonto', 'root', 'root', {
  //host: 'db', 
  host: 'localhost',
  dialect: 'mysql',
});

const db = {};
const modelsPath = path.join(__dirname);

// Primeiro, carrega todos os models
fs.readdirSync(modelsPath)
  .filter(file => file.endsWith('.model.js'))
  .forEach(file => {
    const model = require(path.join(modelsPath, file));
    db[model.name] = model;
  });

// Depois, roda setup de cada model se existir
fs.readdirSync(modelsPath)
  .filter(file => file.endsWith('.setup.js'))
  .forEach(file => {
    const setupFn = require(path.join(modelsPath, file));
    // Pega o nome base do arquivo, tipo "endereco" de "endereco.setup.js"
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
