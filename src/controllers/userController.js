const { getUserDB, getAllUsersDB } = require("../models/userModel");

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "El ID es requerido" });
    }

    const user = await getUserDB(id);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener el usuario" });
  }
};
const getAllUsers = async (req, res) => {
    try {
      const users = await getAllUsersDB();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al obtener los usuarios" });
    }
};

module.exports = { getUser , getAllUsers};

