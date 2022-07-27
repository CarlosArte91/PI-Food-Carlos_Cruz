const { Recipe, DietType } = require("../db.js");

async function preLoadRecipes(preRecipes) {
  let dietTypes = await DietType.findAll();

  preRecipes.forEach(async (recipe) => {
    let newRecipe = await Recipe.create(recipe);
    let array = [];
      recipe.diets.forEach(diet => {
        dietTypes.forEach(obj => {
          if (diet.slice(1) === obj.name.slice(1)) array.push(obj.id);
        });
      });
        newRecipe.addDietTypes(array);
  });
}

const preRecipess = [
  {
    name: "Pollo apanado",
    image:
      "https://www.comidastipicaschilenas.com/wp-content/uploads/2020/06/filetitos-de-pollo-apanado-chileno-2.jpg?ezimgfmt=rs:352x198/rscb1/ng:webp/ngcb1",
    healthScore: 85,
    summary: "delicioso pollo apanado",
    steps: "1 2 3",
    diets: [1, 3, 6],
  },
  {
    name: "Sancocho de gallina",
    image:
      "https://www.guiadelacocina.com/images/stories/2012_05/sancocho-de-gallina.jpg",
    healthScore: 90,
    summary: "exquisito sancocho de gallina",
    steps: "1 2 3",
    diets: [1, 2, 3],
  },
  {
    name: "Arroz con pollo",
    image:
      "http://vamosllegando.com/wp-content/uploads/2021/05/arroz-con-pollo-colombia.jpg",
    healthScore: 35,
    summary: "el mejor del mundo",
    steps: "1 2 3",
    diets: [1, 6, 5],
  },
  {
    name: "Torta negra de navidad",
    image:
      "https://t2.rg.ltmcdn.com/es/posts/2/5/5/torta_de_navidad_o_torta_negra_11552_orig.jpg",
    healthScore: 50,
    summary: "exquisita torta navideña",
    steps: "1 2 3",
    diets: [4, 6, 3],
  },
  {
    name: "Lasagna",
    image:
      "https://media.istockphoto.com/photos/lasagna-traditional-italian-pasta-picture-id1252736340?k=20&m=1252736340&s=612x612&w=0&h=vBPo9vH5zb4v0U3VejpFZr8OmS7dxbYNJzg4ZVYJO9c=",
    healthScore: 45,
    summary: "esquisita lasagna",
    steps: "1 2 3",
    diets: [2, 5, 6],
  },
  {
    name: "Arroz con leche",
    image:
      "https://www.cocinavital.mx/wp-content/uploads/2019/04/como-hacer-arroz-con-leche.jpg",
    healthScore: 70,
    summary: "delicioso arroz con leche y uvas",
    steps: "1 2 3",
    diets: [6, 2, 1],
  },
];

const preRecipes = [
  {
    healthScore: 8,
    //id: 268475,
    name: "Chicken with Creamy Dijon Sauce",
    image: "https://spoonacular.com/recipeImages/268475-556x370.jpg",
    summary:
      'Chicken with Creamy Dijon Sauce might be a good recipe to expand your main course recipe box. This recipe serves 4. One portion of this dish contains roughly <b>24g of protein</b>, <b>6g of fat</b>, and a total of <b>165 calories</b>. For <b>$1.13 per serving</b>, this recipe <b>covers 13%</b> of your daily requirements of vitamins and minerals. 1 person has made this recipe and would make it again. A mixture of teaspoon bottled garlic, pepper, mayonnaise, and a handful of other ingredients are all it takes to make this recipe so yummy. To use up the salt you could follow this main course with the <a href="https://spoonacular.com/recipes/apple-turnovers-recipe-48175">Apple Turnovers Recipe</a> as a dessert. It is a good option if you\'re following a <b>gluten free and dairy free</b> diet. From preparation to the plate, this recipe takes approximately <b>12 minutes</b>. It is brought to you by My Recipes. Taking all factors into account, this recipe <b>earns a spoonacular score of 48%</b>, which is good. Try <a href="https://spoonacular.com/recipes/chicken-with-creamy-dijon-sauce-40366">Chicken With Creamy Dijon Sauce</a>, <a href="https://spoonacular.com/recipes/chicken-cutlets-with-creamy-dijon-sauce-330761">Chicken Cutlets with Creamy Dijon Sauce</a>, and <a href="https://spoonacular.com/recipes/chicken-with-creamy-dijon-mustard-sauce-74508">Chicken With Creamy Dijon Mustard Sauce</a> for similar recipes.',
    dishTypes: ["lunch", "main course", "main dish", "dinner"],
    diets: ["gluten free", "dairy free"],
    steps: "1: Preheat broiler./-/2: Coat chicken with cooking spray; sprinkle with salt, pepper, and paprika./-/3: Place chicken on broiler pan coated with cooking spray. Broil 5 to 6 minutes on each side or until done./-/4: Combine mayonnaise and remaining 4 ingredients in a small bowl./-/5: Serve chicken with sauce.",
    analyzedInstructions: [
      {
        steps: [
          {
            number: 1,
            step: "Preheat broiler.",
            number: 2,
            step: "Coat chicken with cooking spray; sprinkle with salt, pepper, and paprika.",
            number: 3,
            step: "Place chicken on broiler pan coated with cooking spray. Broil 5 to 6 minutes on each side or until done.",
            number: 4,
            step: "Combine mayonnaise and remaining 4 ingredients in a small bowl.",
            number: 5,
            step: "Serve chicken with sauce.",
          },
        ],
      },
    ],
  },
  {
    healthScore: 22,
    //id: 227534,
    name: "Foie Gras with Date Purée and Pomegranate",
    image: "https://spoonacular.com/recipeImages/227534-556x370.jpg",
    summary:
      'Need a <b>dairy free hor d\'oeuvre</b>? Foie Gras with Date Purée and Pomegranate could be an awesome recipe to try. This recipe serves 32. One serving contains <b>95 calories</b>, <b>2g of protein</b>, and <b>5g of fat</b>. For <b>$1.08 per serving</b>, this recipe <b>covers 7%</b> of your daily requirements of vitamins and minerals. Not a lot of people made this recipe, and 4 would say it hit the spot. Head to the store and pick up block foie gras, medjool dates, garnish: pomegranate seeds, and a few other things to make it today. From preparation to the plate, this recipe takes about <b>40 minutes</b>. It is brought to you by Epicurious. Overall, this recipe earns a <b>rather bad spoonacular score of 30%</b>. Try <a href="https://spoonacular.com/recipes/foie-gras-with-date-pure-and-pomegranate-56585">Foie Gras With Date Purée And Pomegranate</a>, <a href="https://spoonacular.com/recipes/pan-seared-foie-gras-with-spiced-citrus-pure-198384">Pan-Seared Foie Gras With Spiced Citrus Purée</a>, and <a href="https://spoonacular.com/recipes/seared-foie-gras-with-foie-gras-soup-dumplings-770190">Seared Foie Gras with Foie Gras Soup Dumplings</a> for similar recipes.',
    dishTypes: [
      "antipasti",
      "starter",
      "snack",
      "appetizer",
      "antipasto",
      "hor d'oeuvre",
    ],
    diets: ["dairy free"],
    steps: "1: Soak dates in boiling-hot water (1/2 cup) in a bowl 10 minutes./-/2: Transfer dates with a slotted spoon to a mini food processor or a blender along with 1 tablespoon soaking liquid./-/3: Add pomegranate molasses and purée until smooth./-/4: Preheat broiler./-/5: Cut enough 1/4-inch-thick slices from brioche to cut into a total of 32 (1 1/2-inch) squares (without crust)./-/6: Broil brioche squares on a baking sheet 4 to 5 inches from heat, turning once, until pale golden, about 1 1/2 minutes total. (Watch carefully; brioche toasts quickly.)/-/7: Dip a sharp paring knife in hot water, then dry it and halve foie gras lengthwise./-/8: Cut each half crosswise into 16 slices (32 total), dipping and drying knife after each cut. Put each slice as cut on top of a brioche toast, then top with a small dollop of date purée and a few pomegranate seeds.",
    analyzedInstructions: [
      {
        steps: [
          {
            number: 1,
            step: "Soak dates in boiling-hot water (1/2 cup) in a bowl 10 minutes.",
            number: 2,
            step: "Transfer dates with a slotted spoon to a mini food processor or a blender along with 1 tablespoon soaking liquid.",
            number: 3,
            step: "Add pomegranate molasses and purée until smooth.",
            number: 4,
            step: "Preheat broiler.",
            number: 5,
            step: "Cut enough 1/4-inch-thick slices from brioche to cut into a total of 32 (1 1/2-inch) squares (without crust).",
            number: 6,
            step: "Broil brioche squares on a baking sheet 4 to 5 inches from heat, turning once, until pale golden, about 1 1/2 minutes total. (Watch carefully; brioche toasts quickly.)",
            number: 7,
            step: "Dip a sharp paring knife in hot water, then dry it and halve foie gras lengthwise.",
            number: 8,
            step: "Cut each half crosswise into 16 slices (32 total), dipping and drying knife after each cut. Put each slice as cut on top of a brioche toast, then top with a small dollop of date purée and a few pomegranate seeds.",
          },
        ],
      },
    ],
  },
  {
    healthScore: 10,
    //id: 583942,
    name: "Spicy Mango Slaw",
    image: "https://spoonacular.com/recipeImages/583942-556x370.jpg",
    summary:
      'Spicy Mango Slaw might be just the side dish you are searching for. One serving contains <b>63 calories</b>, <b>2g of protein</b>, and <b>1g of fat</b>. For <b>84 cents per serving</b>, this recipe <b>covers 9%</b> of your daily requirements of vitamins and minerals. This recipe from The Novice Chef Blog has 1920 fans. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. It can be enjoyed any time, but it is especially good for <b>The Fourth Of July</b>. Head to the store and pick up purple cabbage, greek yogurt, juice of lime, and a few other things to make it today. It is a good option if you\'re following a <b>gluten free and vegetarian</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 74%</b>. This score is good. Similar recipes include <a href="https://spoonacular.com/recipes/spicy-slaw-with-radicchio-green-mango-18860">Spicy Slaw With Radicchio & Green Mango</a>, <a href="https://spoonacular.com/recipes/pork-tenderloin-sliders-with-spicy-mango-slaw-583649">Pork Tenderloin Sliders with Spicy Mango Slaw</a>, and <a href="https://spoonacular.com/recipes/grilled-shrimp-tacos-with-spicy-mango-slaw-577379">Grilled Shrimp Tacos with Spicy Mango Slaw</a>.',
    dishTypes: ["side dish"],
    diets: ["gluten free", "lacto ovo vegetarian"],
    steps: "1: In a small bowl, whisk together greek yogurt, mayo, Sriracha, lime juice and kosher salt. Set aside. In a large bowl, toss together coleslaw mix, purple cabbage, cilantro, red onion and mango. When ready to serve, toss coleslaw mix with dressing until evenly coated./-/2: Serve immediately!",
    analyzedInstructions: [
      {
        steps: [
          {
            number: 1,
            step: "In a small bowl, whisk together greek yogurt, mayo, Sriracha, lime juice and kosher salt. Set aside. In a large bowl, toss together coleslaw mix, purple cabbage, cilantro, red onion and mango. When ready to serve, toss coleslaw mix with dressing until evenly coated.",
            number: 2,
            step: "Serve immediately!",
          },
        ],
      },
    ],
    originalId: null,
  },
  {
    healthScore: 37,
    //id: 625478,
    name: "Snack_Sardines",
    image: "https://www.kingoscar.com/wp-content/uploads/2016/04/sardine-celery-sticks-768x513.jpg",
    summary:
      "Snack_Sardines is a <b>gluten free, dairy free, and pescatarian</b> recipe with 1 servings. One portion of this dish contains about <b>9g of protein</b>, <b>4g of fat</b>, and a total of <b>214 calories</b>. For <b>70 cents per serving</b>, this recipe <b>covers 12%</b> of your daily requirements of vitamins and minerals. Head to the store and pick up apples, quinoa, sardines, and a few other things to make it today. From preparation to the plate, this recipe takes around <b>30 minutes</b>. Similar recipes include .",
    dishTypes: [
      "antipasti",
      "starter",
      "snack",
      "appetizer",
      "antipasto",
      "hor d'oeuvre",
    ],
    diets: ["gluten free", "dairy free", "pescatarian"],
    steps: "1: Cook Quinoa/-/2: Stir in Apples and Sardines",
    analyzedInstructions: [
      {
        steps: [
          {
            number: 1,
            step: "Cook Quinoa",
            number: 2,
            step: "Stir in Apples and Sardines",
          },
        ],
      },
    ],
  },
  {
    healthScore: 2,
    //id: 625158,
    name: "Gluten Free Peanut Butter Brownie Cookies",
    image: "https://images-gmi-pmc.edge-generalmills.com/880436ce-bcee-4f1e-8933-ab2783fff991.jpg",
    summary:
      'The recipe Gluten Free Peanut Butter Brownie Cookies is ready <b>in approximately 20 minutes</b> and is definitely a great <b>gluten free, dairy free, fodmap friendly, and vegetarian</b> option for lovers of American food. This recipe makes 24 servings with <b>121 calories</b>, <b>4g of protein</b>, and <b>7g of fat</b> each. For <b>12 cents per serving</b>, this recipe <b>covers 4%</b> of your daily requirements of vitamins and minerals. If you have egg, brown sugar, peanut butter, and a few other ingredients on hand, you can make it. 1 person has made this recipe and would make it again. It works well as a very affordable dessert. All things considered, we decided this recipe <b>deserves a spoonacular score of 28%</b>. This score is rather bad. Try <a href="https://spoonacular.com/recipes/peanut-butter-brownie-bites-low-carb-and-gluten-free-768038">Peanut Butter Brownie Bites (Low Carb and Gluten Free)</a>, <a href="https://spoonacular.com/recipes/gluten-free-peanut-butter-jelly-brownie-bites-861675">Gluten Free Peanut Butter & Jelly Brownie Bites</a>, and <a href="https://spoonacular.com/recipes/flourless-peanut-butter-kiss-cookies-gluten-free-dairy-free-559252">Flourless Peanut Butter Kiss Cookies ( Gluten-Free, Dairy-Free)</a> for similar recipes.',
    dishTypes: [
      "antipasti",
      "starter",
      "snack",
      "appetizer",
      "antipasto",
      "hor d'oeuvre",
    ],
    diets: [
      "gluten free",
      "dairy free",
      "lacto ovo vegetarian",
      "fodmap friendly",
    ],
    steps: "1: Preheat the oven to 350 degrees F./-/2: Mix all of the ingredients in a stand mixer until well combined.Drop by rounded teaspoonfuls onto a parchment lined baking sheet.Use a fork to press down the cookies and make the cross pattern on top/-/3: Bake for 10 minutes.Allow to cool for 5 minutes on the pan before removing",
    analyzedInstructions: [
      {
        steps: [
          {
            number: 1,
            step: "Preheat the oven to 350 degrees F.",
            number: 2,
            step: "Mix all of the ingredients in a stand mixer until well combined.Drop by rounded teaspoonfuls onto a parchment lined baking sheet.Use a fork to press down the cookies and make the cross pattern on top",
            number: 3,
            step: "Bake for 10 minutes.Allow to cool for 5 minutes on the pan before removing",
          },
        ],
      },
    ],
  },
  {
    healthScore: 5,
    //id: 615387,
    name: "Simple Vegan Meatballs",
    image: "https://spoonacular.com/recipeImages/615387-556x370.jpg",
    summary:
      'This recipe makes 22 servings with <b>171 calories</b>, <b>3g of protein</b>, and <b>16g of fat</b> each. For <b>44 cents per serving</b>, this recipe <b>covers 4%</b> of your daily requirements of vitamins and minerals. Plenty of people made this recipe, and 235 would say it hit the spot. If you have bread crumbs, vegan parmesan cheese, flax egg, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes about <b>40 minutes</b>. It is a good option if you\'re following a <b>dairy free</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 57%</b>. This score is pretty good. Try <a href="https://spoonacular.com/recipes/simple-baked-meatballs-530516">Simple Baked Meatballs</a>, <a href="https://spoonacular.com/recipes/simple-sweet-and-sour-meatballs-265313">Simple Sweet and Sour Meatballs</a>, and <a href="https://spoonacular.com/recipes/simple-baked-turkey-meatballs-717394">Simple Baked Turkey Meatballs</a> for similar recipes.',
    dishTypes: [
      "antipasti",
      "starter",
      "snack",
      "appetizer",
      "antipasto",
      "hor d'oeuvre",
    ],
    diets: ["dairy free"],
    steps: "1: Preheat oven to 375 degrees and prepare flax egg in a small dish.In a large, deep skillet, sautee onion and garlic in 1/2 Tbsp olive oil over medium heat until soft and translucent - about 3 minutes. Set aside./-/2: Add tempeh to food processor and pulse to break down. Then add sautd garlic and onion remaining ingredients (except olive oil) and mix, scraping down sides as needed. You want it to form into a moldable dough.Taste and adjust seasonings as needed. The tempeh will come across as a little bitter, but once coated, baked and served with marinara it's not nearly as apparent.NOTE: Depending on how salty your vegan parmesan cheese is, you may need to add a little salt and pepper at this point. However, I didnt find it necessary.Scoop out 1 Tbsp amounts of dough and roll into balls. At this time, heat the same skillet you used earlier to medium heat./-/3: Mix remaining bread crumbs and parmesan cheese together in a shallow dish./-/4: Add tempeh balls one or two at a time and roll to coat./-/5: Add enough olive oil to form a thin layer on the bottom of your hot skillet, then add your coated tempeh balls in two batches, as to not crowd the pan. Brown for about 5 minutes total, shaking the pan to roll them around to brown all sides./-/6: Add browned meatballs to a baking sheet and add to the oven to bake for about 15 minutes, or longer if desired for a crispier result.At this time, prep any pasta your want to serve with your meatballs, as well as your favorite marinara sauce (I love this pizza sauce).Once meatballs are deep golden brown and fairly firm to the touch, remove from oven.To serve, top cooked pasta with meatballs and pour over marinara sauce. Top with another sprinkle of vegan parmesan cheese and fresh parsley. Leftovers will keep in the fridge for up to a few days, though best when fresh.",
    analyzedInstructions: [
      {
        steps: [
          {
            number: 1,
            step: "Preheat oven to 375 degrees and prepare flax egg in a small dish.In a large, deep skillet, sautee onion and garlic in 1/2 Tbsp olive oil over medium heat until soft and translucent - about 3 minutes. Set aside.",
            number: 2,
            step: "Add tempeh to food processor and pulse to break down. Then add sautd garlic and onion remaining ingredients (except olive oil) and mix, scraping down sides as needed. You want it to form into a moldable dough.Taste and adjust seasonings as needed. The tempeh will come across as a little bitter, but once coated, baked and served with marinara it's not nearly as apparent.NOTE: Depending on how salty your vegan parmesan cheese is, you may need to add a little salt and pepper at this point. However, I didnt find it necessary.Scoop out 1 Tbsp amounts of dough and roll into balls. At this time, heat the same skillet you used earlier to medium heat.",
            number: 3,
            step: "Mix remaining bread crumbs and parmesan cheese together in a shallow dish.",
            number: 4,
            step: "Add tempeh balls one or two at a time and roll to coat.",
            number: 5,
            step: "Add enough olive oil to form a thin layer on the bottom of your hot skillet, then add your coated tempeh balls in two batches, as to not crowd the pan. Brown for about 5 minutes total, shaking the pan to roll them around to brown all sides.",
            number: 6,
            step: "Add browned meatballs to a baking sheet and add to the oven to bake for about 15 minutes, or longer if desired for a crispier result.At this time, prep any pasta your want to serve with your meatballs, as well as your favorite marinara sauce (I love this pizza sauce).Once meatballs are deep golden brown and fairly firm to the touch, remove from oven.To serve, top cooked pasta with meatballs and pour over marinara sauce. Top with another sprinkle of vegan parmesan cheese and fresh parsley. Leftovers will keep in the fridge for up to a few days, though best when fresh.",
          },
        ],
      },
    ],
    originalId: null,
  },
  {
    healthScore: 0,
    //id: 598765,
    name: "Lill'pertif",
    image: "https://spoonacular.com/recipeImages/598765-556x370.jpg",
    summary:
      "The recipe Lill'pertif could satisfy your Mediterranean craving in about <b>5 minutes</b>. One serving contains <b>163 calories</b>, <b>0g of protein</b>, and <b>3g of fat</b>. For <b>$1.9 per serving</b>, this recipe <b>covers 1%</b> of your daily requirements of vitamins and minerals. This recipe is liked by 11 foodies and cooks. It is a good option if you're following a <b>caveman, gluten free, primal, and fodmap friendly</b> diet. A mixture of vodka, lemon zest, lillet, and a handful of other ingredients are all it takes to make this recipe so scrumptious. A couple people really liked this beverage. All things considered, we decided this recipe <b>deserves a spoonacular score of 7%</b>. This score is very bad (but still fixable). Try  for similar recipes.",
    dishTypes: ["beverage", "drink"],
    diets: [
      "gluten free",
      "dairy free",
      "lacto ovo vegetarian",
      "fodmap friendly",
      "vegan",
    ],
    steps: "1: Fill a rocks glass or large wine glass half full with ice./-/2: Add the Lillet, vermouth and vodka. Stir./-/3: Twist the lemon zest directly over the glass, then drop in. Spear the olive on a pick and drop in.",
    analyzedInstructions: [
      {
        steps: [
          {
            number: 1,
            step: "Fill a rocks glass or large wine glass half full with ice.",
            number: 2,
            step: "Add the Lillet, vermouth and vodka. Stir.",
            number: 3,
            step: "Twist the lemon zest directly over the glass, then drop in. Spear the olive on a pick and drop in.",
          },
        ],
      },
    ],
  },
];

module.exports = {
  preLoadRecipes,
  preRecipes,
};
