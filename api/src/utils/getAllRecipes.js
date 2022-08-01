require('dotenv').config();
const { BASE, ALL_SEARCH } = process.env;
const axios = require('axios');
const { Recipe, DietType } = require('../db.js');

async function getAllRecipes() {
    try {
        // let recipesApi = (await axios.get(`${BASE}${ALL_SEARCH}`)).data.results;
        // recipesApi = recipesApi.map((recipe) => {
        //     let diets = recipe.diets.map(diet => {
        //         return diet[0].toUpperCase() + diet.slice(1);
        //     })
        //     return {
        //         id: recipe.id,
        //         name: recipe.title,
        //         image: recipe.image,
        //         healthScore: recipe.healthScore,
        //         diets
        //     }
        // });
        let recipesApi = [];

        let recipesDB = await Recipe.findAll({
            attributes: ['id', 'name', 'image', 'healthScore'],
            include: {
                model: DietType,
                attributes: ['name'],
                through: {attributes: []}
            }
        });

        recipesDB = recipesDB.map(recipe => {
            let diets = [];
            diets = recipe.dietTypes.map(diet => {
                return diet.name;
            })

            return {
                id: recipe.id,
                name: recipe.name,
                image: recipe.image,
                healthScore: recipe.healthScore,
                diets
            }
        });

        let allRecipes = recipesDB.concat(recipesApi);
        return allRecipes;
    } catch (error) {
        console.log(error);
    }
}

module.exports = getAllRecipes;