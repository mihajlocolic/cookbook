import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ScrollTop from "./ScrollTop";

const AddRecipe = () => {
    const [name, setDishName] = useState('');
    const [description, setDishDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [preparation, setPreparation] = useState('');
    const [image, setImage] = useState('')
    const {showButton, handleScrollToTop} = ScrollTop();
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const dish = {name, description, ingredients, preparation, image};

        setIsPending(true);

        fetch('http://localhost:8000/recipes/',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(dish)
        }).then(() => {
            console.log("New dish added");
            setIsPending(false);
            navigate('/')
        })
    }


    return (
        <div className="add-recipe">
            <form className="addRecipeForm" onSubmit={handleSubmit}>
                <label>Dish name:</label>
                <input 
                    name="dishName" 
                    type="text" 
                    value={name}
                    onChange={(e) => setDishName(e.target.value)}
                    required
                ></input>
                <label>Short description:</label>
                <textarea 
                    name="dishDescription"  
                    value={description}
                    onChange={(e) => setDishDescription(e.target.value)}   
                ></textarea>
                <label>Ingredients:</label>
                <textarea 
                    name="ingridients" 
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                ></textarea>
                <label>Preparation:</label>
                <textarea 
                    name="preparation" 
                    value={preparation}
                    onChange={(e) => setPreparation(e.target.value)}
                ></textarea>
                <label>Image URL:</label>
                <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                />
                {! isPending && <button className="btn btn-primary">Add Dish</button>}
                {isPending && <button className="btn btn-primary">Adding dish..</button>}
            </form>
            { showButton && <img className='scrollToTop' src="/backToTop.svg" onClick={handleScrollToTop}></img>}
        </div>
    );
}
 
export default AddRecipe;