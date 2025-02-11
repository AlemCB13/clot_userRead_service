const express = require("express");
const router = express.Router();
const { getUser, getAllUsers } = require("../controllers/userController");

// Ruta para obtener usuario por ID
router.get("/:id", getUser);

router.get("/", getAllUsers);

module.exports = router;
