import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeInput, changePage, searchRecipes } from "../store/actions";

export default function SearchBar() {
    const [search, setSearch] = useState('');
    let dispatch = useDispatch();

    function onButtonSubmit(theEvent) {
        theEvent.preventDefault();       
        dispatch(changePage(1));
        dispatch(changeInput(1));
        dispatch(searchRecipes(search));
        setSearch('');
    }

    function onInputChange(theEvent) {
        setSearch(theEvent.target.value)
    }

    return (
        <div>
            <form onSubmit={onButtonSubmit}>
                <input type='text' onChange={onInputChange} value={search}></input>
                <input type="submit" value='Search'/>
            </form>
        </div>
    );
};
