const Card = require("../models/Card");

// GET ALL
exports.getCards = async (req, res) => {
  const cards = await Card.find();
  res.json(cards);
};

// CREATE
exports.createCard = async (req, res) => {
  const { title, description, image } = req.body;
  if (!title || !description || !image)
    return res.status(400).json({ message: "All fields required" });

  const card = await Card.create(req.body);
  res.status(201).json(card);
};
// GET SINGLE CARD
exports.getSingleCard = async (req, res) => {
  const card = await Card.findById(req.params.id);

  if (!card) {
    return res.status(404).json({ message: "Card not found" });
  }

  res.json(card);
};


// DELETE 
exports.deleteCard = async (req, res) => {
  await Card.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

 