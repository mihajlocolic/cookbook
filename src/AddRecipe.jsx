import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ScrollTop from "./ScrollTop";

const AddRecipe = () => {
    const [name, setDishName] = useState('');
    const [description, setDishDescription] = useState('');
    const [ingridients, setIngridients] = useState('');
    const {showButton, handleScrollToTop} = ScrollTop();
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const dish = {name, description, ingridients};

        setIsPending(true);

        fetch('http://localhost:8000/cookbook/',{
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
                <input 
                    name="dishDescription" 
                    type="text" 
                    value={description}
                    onChange={(e) => setDishDescription(e.target.value)}   
                ></input>
                <label>Ingridients:</label>
                <textarea 
                    name="ingridients" 
                    value={ingridients}
                    onChange={(e) => setIngridients(e.target.value)}
                ></textarea>
                {! isPending && <button className="btn btn-primary">Add Dish</button>}
                {isPending && <button className="btn btn-primary">Adding dish..</button>}
            </form>
            { showButton && <img className='scrollToTop' src="/backToTop.svg" onClick={handleScrollToTop}></img>}
        </div>
    );
}
 
export default AddRecipe;