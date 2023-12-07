const express = require("express");
const createUser = require("../../services/user/createUser");
const login = require("../../services/user/login");
const getUser = require("../../services/user/getUser");

const router = express.Router();

router.post("/usuarios", (req, res) => {
  createUser(req, res);
});

router.post("/login", (req, res) => {
  login(req, res);
});

router.get("/usuario", (req, res) => {
  getUser(req, res);
});

module.exports = router;
