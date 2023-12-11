const pool = require("../../db");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const encryptPassword = require("../../helpers/encryptPassword");

dotenv.config();

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(404).send({
        message: "email or password is not defined",
      });
    }

    const passwordEncripted = await encryptPassword(password);

    const users = await pool.query(
      `SELECT * FROM users WHERE password='${passwordEncripted}' AND email='${email}'`
    );

    if (users.rowCount === 0) {
      return res.status(404).send({
        message: "email or password is not correct",
      });
    }

    const secretKey = process.env.SECRET_KEY_JWT;
    const user = users.rows[0];

    const token = jwt.sign(user, secretKey, {
      expiresIn: "5m",
    });

    return res.status(200).json({
      token,
      userName: user.name,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error login",
    });

    throw error;
  }
};

module.exports = login;
