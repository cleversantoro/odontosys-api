const fs = require('fs');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');

// Configura a conexão
const sequelize = new Sequelize(
  'odonto', 
  'root',
  'root',
  {  
    host: 'db',  
    //host: 'localhost',  
    dialect: 'mysql', 
  }
);

const db = {};
const modelsPath = path.join(__dirname);

// Carrega todos os arquivos da pasta models
fs.readdirSync(modelsPath)
  .filter(file => file !== 'index.js' && file.endsWith('.js'))
  .forEach(file => {
    const model = require(path.join(modelsPath, file));
    (sequelize, DataTypes);
    db[model.name] = model;
  });

// Aqui você pode definir os relacionamentos, se houver
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
