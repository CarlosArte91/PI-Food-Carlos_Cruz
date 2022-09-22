const { Recipe } = require('../db.js');

async function postNewRecipe(body) {
    
    try {
        const {
            name,
            image,            
            healthScore,
            summary,
            steps,
            diets
        } = body;
        console.log(diets);
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
        if (!created) return {message: 'The recipe exists'};
        console.log(newRecipe.__proto__);
        newRecipe.addDietTypes(diets);
        //return {message: 'Recipe successfully created'};
        return newRecipe;
    } catch (error) {
        console.log(error);
    }
};

module.exports = postNewRecipe;
