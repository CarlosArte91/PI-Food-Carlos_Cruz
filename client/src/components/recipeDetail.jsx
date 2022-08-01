import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { recipesDetails } from "../store/actions";

export default function RecipeDetail() {
    const recipeDetail = useSelector((state) => state.recipeDetail)
    const { id }  = useParams();
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(recipesDetails(id))
    }, []);

    let diets;
    if (recipeDetail.diets) {
        diets = recipeDetail.diets.map((diet) => {
            return <p key={diet}>• {diet}</p>
        });
    }

    let steps;
    if (recipeDetail.steps) {
        steps = recipeDetail.steps.map((step) => {
            return (
                <div key={step.number}>
                    <h4>{step.number}</h4>
                    <p>{step.description}</p>
                </div>
            );
        });
    }

    return (
        <div>
            {               
                recipeDetail ?
                <div>
                    <Link to={'/home'}>
                        <button>Home</button>
                    </Link>
                    <h1>{recipeDetail.name}</h1>
                    <img src={recipeDetail.image} alt='recipe'/>
                    <h3>{recipeDetail.healthScore}</h3>
                    <p>{recipeDetail.summary && recipeDetail.summary.replace(/<\/?[^>]+(>|$)/g, ' ')}</p>
                    <div>
                        {diets}
                    </div>
                    <div>
                        paso a paso
                        {steps}
                    </div>
                </div> : <div>Loading...</div>
            }            
        </div>
    );
};