import { useDispatch, useSelector } from 'react-redux';
import { changeInput, changePage, filterDiet } from '../store/actions';

let array = [
    "Gluten free",
    "Dairy free",
    "Lacto ovo vegetarian",
    "Vegan",
    "Paleolithic",
    "Primal",
    "Whole 30",
    "Pescatarian",
    "Ketogenic",
    "Fodmap friendly"
];
export default function FilterByDiet() {
    const recipes = useSelector((state) => state.filteredRecipes);
    
    const dispatch = useDispatch();

    function onChangeSelect(theEvent) {
        dispatch(filterDiet(recipes, theEvent.target.value));
        dispatch(changePage(1));
        dispatch(changeInput(1));
    };

    return (
        <div>
            <select name="selectDiet" onChange={onChangeSelect}>
                <option></option>
                {
                    array.map(diet => {
                        return (
                            <option key={diet} value={diet}>{diet}</option>
                        )
                    })
                }
            </select>
        </div>
    );
};
