const { validationResult } = require("express-validator");

const usersController = {
  create: function (req, res) {
    res.render("register");
  },
  login: function (req, res) {
    res.render("login");
  },
  store: function (req, res) {
    let validaciones = validationResult(req);

    if (validaciones.errors.length > 0) {
      //console.log(validaciones.mapped());
      return res.render("register", {
        errors: validaciones.mapped(),
        oldData: req.body,
      });
    }

    return res.render("login");
  },
};

module.exports = usersController;
