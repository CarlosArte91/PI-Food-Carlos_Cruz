const getAllRecipes = require('./getAllRecipes');

async function getSearchRecipes(search) {
    try {
        const recipes = await getAllRecipes();
        const searchRecipes = [];

        recipes.forEach((recipe) => {
            if (recipe.name.toUpperCase().includes(search.toUpperCase())) searchRecipes.push(recipe);
        });

        return searchRecipes;
    } catch (error) {
        console.log(error);
    }
};

module.exports = getSearchRecipes;