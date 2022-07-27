const express = require('express');
const { Recipe } = require('../db.js');
const getAllRecipes = require('../utils/getAllRecipes.js');
const getRecipeById = require('../utils/getRecipeById.js');
const getSearchRecipes = require('../utils/getSearchRecipes.js');

const router = express.Router();
router.use(express.json());

///////////////////////////////////////////////////////////////////////////
// Buscar receta por ID
router.get('/by', async (req, res, next) => {
    const { id } = req.query; 
    const recipeId = await getRecipeById(id);
    res.json(recipeId);
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
        const {
            name,
            image,            
            healthScore,
            summary,
            steps,
            diets
        } = req.body;

        const [newRecipe, created] = await Recipe.findOrCreate({
            where: {
                name
            },
            defaults: {
                name,
                image,                
                healthScore,
                summary,
                steps
            }
        });
        newRecipe.addDietTypes(diets);
        if (!created) return res.json({message: 'La receta ya existe'});
        else return res.json(newRecipe);
    } catch (error) {
        next(error)
    }
});

module.exports = router;
