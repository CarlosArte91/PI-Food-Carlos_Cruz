import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../store/actions";
import Paginated from "./paginated";
import Recipe from "./recipe";

export default function Recipes() {
    const recipes = useSelector((state) => state.filteredRecipes);
    
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRecipes());
    }, []);

    const page = useSelector((state) => state.page);
    const recipesForPage = 2;
    const totalPages = Math.ceil(recipes.length / recipesForPage);

    return (
        <div>
            <div>
                <Paginated totalPages={totalPages}/>
            </div>
            <div>
                {
                    recipes.slice(
                        (page - 1) * recipesForPage,
                        (page - 1) * recipesForPage + recipesForPage
                    ).map((recipe) => {
                        return <Recipe
                            id={recipe.id}
                            name={recipe.name}
                            image={recipe.image}
                            diets={recipe.diets}
                            healthScore={recipe.healthScore}
                            key={recipe.id}
                        />
                    })
                }
            </div>
        </div>
    );
};