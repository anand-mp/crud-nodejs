const express = require("express");
const User = require("../models/User");

const router = express.Router();

router.post('/', async (req, res) => {
    const user = await User.create(req.body);
    res.json(user)
})

router.get('/', async (req, res) => {
    const user = await User.find();
    res.json(user)
})

router.put("/:id", async (req, res) => {

    const user = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(user);

});

router.delete("/:id", async (req, res) => {

    await User.findByIdAndDelete(req.params.id);
    res.json({
        message: "Deleted"
    });

});

module.exports = router;