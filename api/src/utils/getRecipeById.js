require('dotenv').config();
const { BASE, ID_RECIPE } = process.env;
const { Recipe, DietType } = require('../db.js');
const expRegId = "[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}";
const axios = require('axios');

async function getRecipeById(id) {

    try {
        let recipe;
        if (id.match(expRegId)) {
            recipe = await Recipe.findByPk(id, {
                include: [{
                    model: DietType,
                    attributes: ["name"],
                    through: { attributes: [] }
                }]
            });
            let diets = recipe.dietTypes.map(diet => {
                return diet.name;
            });
            let steps = recipe.steps.split('/-/');
            steps = steps.map(step => {
                return {
                    number: parseInt((step.split(': '))[0]),
                    description: (step.split(': '))[1]
                }
            });
            recipe = {
                id: recipe.id,
                name: recipe.name,
                image: recipe.image,
                healthScore: recipe.healthScore,
                summary: recipe.summary,
                diets,
                steps
            }         
        }
        else {
            id = parseInt(id);
            recipe = (await axios.get(`${BASE}${id}${ID_RECIPE}`)).data;
            let steps = [];
            if (recipe.analyzedInstructions.length) {
                steps = recipe.analyzedInstructions[0].steps.map(step => {
                    return {
                        number: step.number,
                        description: step.step
                    };
                });    
            }
            else {
                steps.push({description: 'Steps not found'});
            }
            recipe = {
                id: recipe.id,
                name: recipe.title,
                image: recipe.image,
                healthScore: recipe.healthScore,
                summary: recipe.summary,
                diets: recipe.diets,
                steps
            }
        }
        return recipe;        
    } catch (error) {
        console.log(error);
    } 
};

module.exports = getRecipeById;
