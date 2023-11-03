import { useNavigate, useParams } from "react-router-dom";
import UseFetch from "./UseFetch";
import { useState } from "react";

const EditRecipe = () => {
    const {id} = useParams();
    const { data:recipe, error } = UseFetch('http://localhost:8000/recipes/' + id);
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();
    

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [preparation, setPreparation] = useState('');
    const [image, setImage] = useState('');


    const handleEdit = (e) => {
        e.preventDefault();
        setIsPending(true);

        const tempRecipe = {name, description, ingredients, preparation, image};

        fetch('http://localhost:8000/recipes/' + id, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(tempRecipe)
        })
        .then(() => {
            console.log("Recipe edited.");
            setIsPending(false);
            navigate(`/recipes/${id}`);
        })
        .catch(error => {
            console.log("Error updating recipe data: " + error);
            
        })
    }    
 
    return (
        <div className="edit-recipe">
            { error && <div className="error-message">{error}</div> }
            {recipe &&
                <form className="editRecipeForm" onSubmit={(e) => handleEdit(e)}>
                <label>Dish name:</label>
                <input 
                    name="dishName" 
                    type="text" 
                    defaultValue={recipe.name}
                    onChange={(e) => setName(e.target.value)}
                    required
                ></input>
                <label>Short description:</label>
                <textarea 
                    name="dishDescription"  
                    defaultValue={recipe.description}
                    onChange={(e) => setDescription(e.target.value)}   
                ></textarea>
                <label>Ingredients:</label>
                <textarea 
                    name="ingridients" 
                    defaultValue={recipe.ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                ></textarea>
                <label>Preparation:</label>
                <textarea 
                    name="preparation" 
                    defaultValue={recipe.preparation}
                    onChange={(e) => setPreparation(e.target.value)}
                ></textarea>
                <label>Image URL:</label>
                <input
                type="text"
                defaultValue={recipe.image}
                onChange={(e) => setImage(e.target.value)}
                />
                {! isPending && <button className="btn btn-primary">Save Changes</button>}
                {isPending && <button className="btn btn-primary">Saving changes..</button>}
            </form>
            }
        </div>
    );
}
 
export default EditRecipe;