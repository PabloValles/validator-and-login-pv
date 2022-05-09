const { body } = require("express-validator");
const path = require("path");

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
  body("avatar").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".png", ".gif"];

    if (!file) {
      throw new Error("Tienes que subir una imagen");
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
            ", "
          )}`
        );
      }
    }

    return true;
  }),
];

module.exports = validateCreateUsers;
