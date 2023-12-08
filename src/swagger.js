const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const swagger = (app) => {
  const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Peluqueria Api",
        version: "1.0.0",
        description: "Aqui podremos consumir",
      },
    },
    apis: ["src/routes/product/*.js", "src/routes/user/*.js"],
  };

  const specs = swaggerJsdoc(options);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};

module.exports = swagger;
