const { Product } = require("../models/product");
const { Genre } = require("../models/genre");
const router = require("express").Router();

router.get("/", async (req, res) => {
    const products = await Product.find().select("-__v").sort("name");
    res.send(products);
});

router.get("/:id", async (req, res) => {
    const product = await Product.findById(req.params.id).select("-__v");

    if (!product)
        return res.status(404).send("The item with the given ID was not found.");

    res.send(product);
});

module.exports = router;
