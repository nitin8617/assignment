const router = require("express").Router();
const {
  getCards,
  createCard,
  deleteCard,
  getSingleCard
} = require("../controllers/cardController");

router.get("/", getCards);
router.get("/:id", getSingleCard);

router.post("/", createCard);
router.delete("/:id", deleteCard);
 

module.exports = router;
