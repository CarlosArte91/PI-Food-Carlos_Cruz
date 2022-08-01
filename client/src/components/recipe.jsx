import { Link } from 'react-router-dom';
import style from './recipe.module.css';

export default function Recipe({ id, name, image, diets, healthScore }) {
    return (
        <div className={style.container}>
            <div className={style.image}>
                <img src={image} alt="recipe"/>
            </div>
            <h3>{name}</h3>
            <h4>{healthScore}</h4>
            {
                diets.map(diet => {
                    return <p key={diet}>• {diet}</p>
                })
            }
            <Link to={`/detail/${id}`}>
                <button >see more</button>          
            </Link>
        </div>
    );
};
