import Order from "./order";
import Recipes from "./recipes";
import SearchBar from "./searchBar";
import style from './home.module.css';
import FilterByDiet from "./filterByDiet";
import OrderByHealthScore from "./orderByHealthScore";

export default function Home() {    
    return (
        <div>
            <div className={style.header}>                
                <div><FilterByDiet/></div>
                <div><Order/></div>
                <div><OrderByHealthScore/></div>
                <div><SearchBar/></div>
            </div>
            <Recipes/>
        </div>
    );
};