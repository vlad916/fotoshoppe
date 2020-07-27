const router = require("express").Router();
const { Genre } = require("../models/genre");

router.get("/", async (req, res) => {
  const genres = await Genre.find().select("-__v").sort("name");
  res.send(genres);
});

router.get("/:id", async (req, res) => {
  const genre = await Genre.findById(req.params.id).select("-__v");

  if (!genre)
    return res.status(404).send("The genre with the given ID was not found.");

  res.send(genre);
});

module.exports = router;
