const express = require('express');
const getAllRecipes = require('../utils/getAllRecipes.js');
const getRecipeById = require('../utils/getRecipeById.js');
const getSearchRecipes = require('../utils/getSearchRecipes.js');
const postNewRecipe = require('../utils/postNewRecipe.js');

const router = express.Router();
router.use(express.json());

// Buscar receta por ID
router.get('/by', (req, res, next) => {
    try {
        const { id } = req.query;
        //const recipeById = 
        getRecipeById(id)
        .then(response => {
            res.json(response);
        })
        //res.json(recipeById);        
    } catch (error) {
        next(error);
    }    
});


///////////////////////////////////////////////////////////////////////////
// Traer todas las recetas o las buscadas por query
router.get('/', async (req, res, next) => {
    try {
        const { name } = req.query;
        let recipesResponse = [];

        if (!name) recipesResponse = await getAllRecipes();
        else recipesResponse = await getSearchRecipes(name);

        res.json(recipesResponse);
    } catch (error) {
        next(error);
    }
});


///////////////////////////////////////////////////////////////////////////
// Crear una nueva receta
router.post('/', async (req, res, next) => {
    try {
        const newRecipe = await postNewRecipe(req.body);
        res.json(newRecipe);
    } catch (error) {
        next(error)
    }
});

module.exports = router;
