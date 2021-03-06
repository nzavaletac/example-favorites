const { isAuthenticated } = require("../utils/isAuthenticated");
const {
  create,
  getAll,
  getXIdCreator,
  getXIdFavs,
  deleteXIdFav,
} = require("../controllers/favs.controllers");

const router = require("express").Router();

router
  .route("/favs")
  .post(isAuthenticated, create)
  .get(isAuthenticated, getAll);
router.route("/favs/:userId").get(isAuthenticated, getXIdCreator);
router
  .route("/favs/:favId")
  .get(isAuthenticated, getXIdFavs)
  .delete(isAuthenticated, deleteXIdFav);

module.exports = router;
