const userRoutes = require("./user");
const productRouter = require("./product");

const routes = (app) => {
  app.use("/user", userRoutes);
  app.use("/product", productRouter);
};

module.exports = routes;
