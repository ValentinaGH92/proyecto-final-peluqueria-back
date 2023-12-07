const pool = require("../../db");

const createProduct = async (req, res) => {
  try {
    const { name, price, description, stock, img_url } = req.body;

    const result = await pool.query(
      `INSERT INTO products(name, price, description, stock, img_url) VALUES ('${name}', ${price}, '${description}', ${stock}, '${img_url}')`
    );

    const isRowCountEqualZero = result.rowCount === 0;

    if (isRowCountEqualZero) {
      return res.status(400).send("product not created");
    }

    return res.status(201).send({
      message: "product created sucessfully",
      productCreated: req.body,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error to create a products",
    });

    throw error;
  }
};

module.exports = createProduct;
