import './App.css';
import { Routes, Route } from 'react-router';
import Home from './components/home';
import LandingPage from './components/landingPage';
import RecipeDetail from './components/recipeDetail';
import { useSelector } from 'react-redux';

function App() {
  const recipeDetail = useSelector((state) => state.recipeDetail);


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route
          path='/detail'
          element={
            <RecipeDetail
              name={recipeDetail.name}
              image={recipeDetail.image}
              healthScore={recipeDetail.healthScore}
              summary={recipeDetail.summary}
              diets={recipeDetail.diets}
              steps={recipeDetail.steps}
            />
          }
        />
      </Routes>      
    </div>
  );
}

export default App;
