const swaggerJsDoc = require("swagger-jsdoc");

const fs = require("fs");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "OdontoSys API",
      version: "1.0.0",
      description: "Documentação da API do Sistema OdontoSys. [Postman Collection](http://localhost:5000/odonto.json)",
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Servidor Local",
      },
    ],

    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },

  },
  apis: ["./src/routes/*.js"],
};

module.exports = swaggerJsDoc(options);

const specs = swaggerJsDoc(options);
// // Salvar JSON para importar no Postman
fs.writeFileSync("./src/odonto.json", JSON.stringify(specs, null, 2));





