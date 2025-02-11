const express = require("express");
const router = express.Router();
const { getUser } = require("../controllers/userController");

// Ruta para obtener un usuario por ID
router.get("/:id", getUser);

module.exports = router;
