const pool = require("../../db");

const getProducts = async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM PRODUCTS`);

    return res.status(200).send(result.rows);
  } catch (error) {
    res.status(500).send({
      message: "Error to create a products",
    });

    throw error;
  }
};

module.exports = getProducts;
