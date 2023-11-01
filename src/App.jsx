import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Recipe from './components/Recipe';
import AddRecipe from './components/AddRecipe';
import NotFound from './components/NotFound';

function App() {

  return (
    <Router>
      <div className="app">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/recipes/:id' element={<Recipe/>}></Route>
        <Route path='/addrecipe' element={<AddRecipe/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
