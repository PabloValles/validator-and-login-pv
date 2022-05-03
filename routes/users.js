const express = require("express");
const path = require("path");
const multer = require("multer");
const router = express.Router();

const usersController = require("../controllers/usersController");
const { body } = require("express-validator");

// Validaciones:
const validateCreateUsers = [
  body("user")
    .notEmpty()
    .withMessage("Usuario vacío, debes completar tu usuario"),
  body("email")
    .notEmpty()
    .withMessage("Completa con tu direcció de correo electrónico"),
  body("password")
    .notEmpty()
    .withMessage("Password inválido, intente nuevamente"),
];

router.get("/login", usersController.login);

router.get("/create", usersController.create);
router.post("/create", validateCreateUsers, usersController.store);

module.exports = router;
