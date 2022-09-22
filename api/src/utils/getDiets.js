const { DietType } = require('../db.js');
const getAllRecipes = require('./getAllRecipes.js');
const { preLoadRecipes, preRecipes } = require('./preLoadRecipes.js');

async function getDiets() {
    try {
        let recipes = await getAllRecipes();
        recipes = recipes.map((recipe) => {
            return recipe.diets;
        });
        recipes = recipes.flat().sort((x, y) => {
            if (x < y) return -1;
            if (x > y) return 1;
            return 0;
        });
        let diets = [];
        recipes.map(diet => {
            if (!diets.includes(diet)) diets.push(diet);
        });
        diets = diets.map((diet, i) => {
            return {
                id: i + 1,
                name: diet[0].toUpperCase() + diet.slice(1)            
            };
        });  
        await DietType.bulkCreate(diets);
        await preLoadRecipes(preRecipes);
    } catch (error) {
        console.log(error);
    }
}

module.exports = getDiets;
