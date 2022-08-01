import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import controllerForm from '../util/controllerForm.js';
let dietsIds = [];
let nStep = 1;

export default function NewRecipe() {
    const diets = useSelector((state) => state.diets);
    const [newRecipe, setNewRecipe] = useState({
        name: '',
        image: '',
        healthScore: '',
        summary: '',
        steps: '',
        diets: []
    });
    const [saveSteps, setSaveSteps] = useState({});
    const [listSteps, setListSteps] = useState('');
    const [textareaValue, setTextareaValue] = useState('');
    const [error, setError] = useState({
        name: 'Name field must not be empty',
        image: 'Image field must not be empty',
        healthScore: 'Health score field must not be empty',
        summary: 'Summary field must not be empty',
        diets: 'Should check at least one type of diet',
        step: 'You should add at least one step'
    });

    function handlerOnSubmit(theEvent) {
        theEvent.preventDefault();
        let messageError = '';
        for (let item in error) {
            if (messageError) break;
            else messageError = error[item];            
        };
        if (messageError) alert(messageError);
        else {
            axios.post(`http://localhost:3001/api/recipes`, newRecipe);
            alert('Your recipe was successfully created');
    
            setNewRecipe({
                name: '',
                image: '',
                healthScore: '',
                summary: '',
                steps: '',
                diets: []     
            });
            setSaveSteps({});
            setListSteps('');
            setTextareaValue('');
            nStep = 1;

            diets.forEach(diet => {
                document.getElementById(diet.id).checked = false
            });
        }
    };

    function handlerInputsChange(theEvent) {
        controllerForm(error, setError, theEvent);
        setNewRecipe({
            ...newRecipe,
            [theEvent.target.name]: theEvent.target.value
        });
    };

    function checkedOption(theEvent) {
        if (theEvent.target.checked) dietsIds.push(parseInt(theEvent.target.value));        
        else dietsIds.splice(dietsIds.indexOf(parseInt(theEvent.target.value)), 1);
        controllerForm(error, setError, theEvent, dietsIds);        
        setNewRecipe({
            ...newRecipe,
            diets: dietsIds
        });
    }

    function handlerStepChange(theEvent) {
        controllerForm(error, setError, theEvent, null, listSteps);
        setTextareaValue(theEvent.target.value)
        setSaveSteps({
            ...saveSteps,
            [nStep + ': ']: theEvent.target.value
        });
    };

    function createSteps(theEvent) {
        theEvent.preventDefault();        
        let stepsString = '';
        let toSetSteps = '';

        for (let step in saveSteps) {
            stepsString = `${stepsString}${step}${saveSteps[step]}\n\n`;
            toSetSteps = `${toSetSteps}${step}${saveSteps[step]}/-/`;
        }

        controllerForm(error, setError, theEvent, null, null, stepsString);
        setListSteps(stepsString);
        setNewRecipe({
            ...newRecipe,
            steps: toSetSteps.slice(0, (toSetSteps.length - 3))
        });
        setTextareaValue('');
        nStep++;
    };    

    return (
        <div>
            <Link to={'/home'}>
                <button>home</button>
            </Link>
            <form onSubmit={handlerOnSubmit}>
                <div>
                    <label>Name</label>
                    <input name='name' type='text' onChange={handlerInputsChange} value={newRecipe.name}/>
                    {error.name && <p>{error.name}</p>}
                </div>
                <div>
                    <label>Image</label>
                    <input name='image' type='text' onChange={handlerInputsChange} value={newRecipe.image}/>
                    {error.image && <p>{error.image}</p>}
                </div>
                <div>
                    <label>Health Score</label>
                    <input name='healthScore' type='number' onChange={handlerInputsChange} value={newRecipe.healthScore}/>
                    {error.healthScore && <p>{error.healthScore}</p>}
                </div>
                <div>
                    <label>Summary</label>
                    <textarea name='summary' onChange={handlerInputsChange} value={newRecipe.summary}/>
                    {error.summary && <p>{error.summary}</p>}
                </div>
                <div>
                    <label>Diets</label>
                    <div>
                        {
                            diets.map(diet => {
                                return (
                                    <div key={diet.id}>
                                        <input id={diet.id} name='diets' type="checkbox" onChange={checkedOption} value={diet.id} key={diet.id}/>
                                        <span> {diet.name}</span>
                                    </div>
                                )
                            })
                        }
                        {error.diets && <p>{error.diets}</p>}
                    </div>
                </div>
                <div>
                    <h4>Step by step</h4>
                    <div>
                        <textarea name='step1' disabled value={listSteps}/>
                        {error.step && <p>{error.step}</p>}
                    </div>
                    <div>
                        <span>{nStep} </span>
                        <textarea name='step' value={textareaValue} onChange={handlerStepChange}/>
                        <button name='step' onClick={createSteps}>add step</button>
                    </div>                    
                </div>              
                <div>
                    <input type='submit' value='Create'/>                    
                </div>
            </form>
        </div>
    );
};
