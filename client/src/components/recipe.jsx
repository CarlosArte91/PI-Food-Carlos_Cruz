import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { recipesDetails } from '../store/actions';

export default function Recipe({ id, name, image, diets, healthScore }) {
    const dispatch = useDispatch();

    let handlerButton = () => {
        dispatch(recipesDetails(id));
    }

    return (
        <div>
            <div>
                <img src={image} alt="recipe" width='300px'/>
            </div>
            <h3>{name}</h3>
            <h4>{healthScore}</h4>
            {
                diets.map(diet => {
                    return <p key={diet}>▸ {diet}</p>
                })
            }
            <Link to={'/detail'}>
                <button onMouseDown={handlerButton}>see more</button>          
            </Link>
        </div>
    );
};