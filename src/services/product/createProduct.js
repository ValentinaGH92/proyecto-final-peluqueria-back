const pool = require("../../db");

const createProduct = async (req, res) => {
  try {
    const { name, price, description, stock, img_url } = req.body;

    const result = await pool.query(
      `INSERT INTO products( name, price, description, stock, img_url) VALUES ('${name}', ${price}, '${description}', ${stock}, '${img_url}')`
    );

    if (result.rowCount) {
      return res.status(201).send({
        message: "product created sucessfully",
        productCreated: req.body,
      });
    }

    return res.status(200).send("product not created");
  } catch (error) {
    res.status(500).send({
      message: "Error to create a products",
    });

    throw error;
  }
};

module.exports = createProduct;
