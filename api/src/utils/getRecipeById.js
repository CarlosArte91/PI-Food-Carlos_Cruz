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
            let steps = recipe.analyzedInstructions[0].steps.map(step => {
                return {
                    number: step.number,
                    description: step.step
                };
            });
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

let rep = [
    {
        "id": 695423,
        "name": "Halibut Packets with Mushrooms & Polenta",
        "image": "https://spoonacular.com/recipeImages/695423-556x370.jpg",
        "healthScore": 15,
        "summary": "Halibut Packets with Mushrooms & Polenta might be just the main course you are searching for. One serving contains <b>394 calories</b>, <b>33g of protein</b>, and <b>19g of fat</b>. This gluten free and dairy free recipe serves 4 and costs <b>$4.9 per serving</b>. 1436 people have made this recipe and would make it again. From preparation to the plate, this recipe takes around <b>45 minutes</b>. A mixture of center-cut bacon, salt, garlic, and a handful of other ingredients are all it takes to make this recipe so tasty. To use up the salt you could follow this main course with the <a href=\"https://spoonacular.com/recipes/apple-turnovers-recipe-48175\">Apple Turnovers Recipe</a> as a dessert. All things considered, we decided this recipe <b>deserves a spoonacular score of 79%</b>. This score is solid. Try <a href=\"https://spoonacular.com/recipes/halibut-spinach-and-tomatoes-in-foil-packets-1882\">Halibut, Spinach, And Tomatoes In Foil Packets</a>, <a href=\"https://spoonacular.com/recipes/asian-halibut-brown-rice-packets-3594\">Asian Halibut & Brown Rice Packets</a>, and <a href=\"https://spoonacular.com/recipes/halibut-with-tomatoes-rosemary-and-zucchini-in-foil-packets-3381\">Halibut with Tomatoes, Rosemary, and Zucchini in Foil Packets</a> for similar recipes.",
        "diets": [
            "gluten free",
            "dairy free"
        ],
        "steps": [
            {
                "number": 1,
                "description": "Preheat oven to 450F. Tear off 4 sheets of parchment paper or foil (about 12 by 24 inches each); if using foil, coat with cooking spray."
            },
            {
                "number": 2,
                "description": "Heat oil in a large nonstick skillet over medium-high heat."
            },
            {
                "number": 3,
                "description": "Add bacon and cook until softened and starting to brown, 2 to 3 minutes."
            },
            {
                "number": 4,
                "description": "Add onion and garlic. Cook, stirring occasionally, for 2 minutes. Stir in mushrooms and cook until beginning to brown, 4 to 7 minutes."
            },
            {
                "number": 5,
                "description": "Add wine and scrape up any browned bits."
            },
            {
                "number": 6,
                "description": "Remove from the heat.To make packets, set a sheet of parchment or foil with a long side closest to you. Fold in half from a short end, then open like a book."
            },
            {
                "number": 7,
                "description": "Place 2 slices of polenta on one side. Set a fillet on the polenta and sprinkle with salt and pepper. Divide the mushroom mixture among the packets, spooning it over the fish. Close the packets and seal the edges with small, tight folds."
            },
            {
                "number": 8,
                "description": "Place the packets on a large baking sheet."
            },
            {
                "number": 9,
                "description": "Bake the packets until the fish is just cooked through, about 14 minutes. (Carefully open one packet to check for donenessbe cautious of the steam.) Set each packet on its own plate."
            },
            {
                "number": 10,
                "description": "Cut an X in the top with scissors and carefully fold open."
            },
            {
                "number": 11,
                "description": "Serve sprinkled with basil."
            }
        ]
    },
    {
        "id": 658756,
        "name": "Romaine Salad with \"Xocai Sipping Xocolate",
        "image": "https://spoonacular.com/recipeImages/658756-556x370.jpg",
        "healthScore": 49,
        "summary": "Need a <b>gluten free and primal main course</b>? Romaine Salad with \"Xocai Sipping Xocolate could be a spectacular recipe to try. For <b>$15.46 per serving</b>, this recipe <b>covers 51%</b> of your daily requirements of vitamins and minerals. This recipe serves 4. One portion of this dish contains approximately <b>25g of protein</b>, <b>41g of fat</b>, and a total of <b>1831 calories</b>. This recipe from Foodista has 1 fans. If you have chocolate, vinaigrette, romaine lettuce, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes roughly <b>roughly 45 minutes</b>. With a spoonacular <b>score of 69%</b>, this dish is pretty good. <a href=\"https://spoonacular.com/recipes/warm-and-luscious-sipping-chocolate-with-xocai-healthy-dark-sipping-xocolate-631763\">Warm and Luscious Sipping Chocolate with Xocai Healthy Dark Sipping Xocolate</a>, <a href=\"https://spoonacular.com/recipes/xocai-irish-cream-with-xocai-healthy-dark-chocolate-nuggets-665480\">Xocai Irish Cream with Xocai Healthy Dark Chocolate Nuggets</a>, and <a href=\"https://spoonacular.com/recipes/fruit-and-spinach-salad-with-xocai-activ-vinaigrette-643945\">Fruit and Spinach Salad with \"Xocai Activ\" Vinaigrette</a> are very similar to this recipe.",
        "diets": [
            "gluten free",
            "primal"
        ],
        "steps": [
            {
                "number": 1,
                "description": "Melt \"Xocai Sipping Xocolate\" with water; coat walnuts. Toss with remaining ingredients."
            },
            {
                "number": 2,
                "description": "Sprinkle 1 tbsp. of un-melted Sipping Xocolate over the salad."
            },
            {
                "number": 3,
                "description": "Serves 4"
            }
        ]
    }

]
