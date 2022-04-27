const { signup } = require("../controllers/users.controllers");

const router = require("express").Router();

router.route("/local/signup").post(signup);

module.exports = router;
