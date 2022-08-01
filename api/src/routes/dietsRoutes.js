const express = require('express');
const { DietType } = require('../db.js');
const router = express.Router();

router.use(express.json());

router.get('/', async (req, res, next) => {
    let diets = await DietType.findAll();
    res.json(diets);
});

module.exports = router;
