const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

routes(app);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`La aplicación está funcionando en http://localhost:${port}`);
});
