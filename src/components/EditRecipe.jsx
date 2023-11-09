import { useNavigate, useParams } from "react-router-dom";
import UseFetch from "./UseFetch";
import { useEffect, useState } from "react";
import config from '../config';

const EditRecipe = () => {

    const jsonServerUrl = config.productionServerUrl;
    const {id} = useParams();
    const { data:recipe, error } = UseFetch(jsonServerUrl + '/' + id);
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();
    

    const [name, setName] = useState();
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [preparation, setPreparation] = useState('');
    const [image, setImage] = useState('');


    useEffect(() => {
        if (recipe) {
            setName(recipe.name);
            setDescription(recipe.description);
            setIngredients(recipe.ingredients);
            setPreparation(recipe.preparation);
            setImage(recipe.image);
        }
    }, [recipe]);

    const handleEdit = (e) => {
        e.preventDefault();
        setIsPending(true);

        const tempRecipe = {name, description, ingredients, preparation, image};

        fetch(jsonServerUrl + '/' + id, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(tempRecipe)
        })
        .then(response => response.json())
        .then(data => {
            setName(data.name);
            setDescription(data.description);
            setIngredients(data.ingredients);
            setPreparation(data.preparation);
            setImage(data.image);
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
                    value={ name }
                    onChange={(e) => setName(e.target.value)}
                    required
                ></input>
                <label>Short description:</label>
                <textarea 
                    name="dishDescription"  
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required   
                ></textarea>
                <label>Ingredients:</label>
                <textarea 
                    name="ingridients" 
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    required
                ></textarea>
                <label>Preparation:</label>
                <textarea 
                    name="preparation" 
                    value={preparation}
                    onChange={(e) => setPreparation(e.target.value)}
                    required
                ></textarea>
                <label>Image URL:</label>
                <input
                type="text"
                value={image}
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