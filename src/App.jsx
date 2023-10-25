import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Recipe from './Recipe';
import AddRecipe from './AddRecipe';
import NotFound from './NotFound';

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
  )
};

export default App;
