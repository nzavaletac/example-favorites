const { signup, login } = require("../controllers/users.controllers");

const router = require("express").Router();

router.route("/local/signup").post(signup);
router.route("/local/login").post(login);

module.exports = router;
