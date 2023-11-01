import { useNavigate, useParams } from "react-router-dom";
import UseFetch from "./UseFetch";
import ScrollTop from "./ScrollTop";

const Recipe = () => {
    const {id} = useParams()
    const { data:recipe, error, isPending } = UseFetch('http://localhost:8000/recipes/' + id)
    const {showButton, handleScrollToTop} = ScrollTop
    const navigate = useNavigate()

    const handleDelete = () => {
        fetch('http://localhost:8000/recipes/' + id, {
            method: 'DELETE'
        })
        .then(response => response.text())
        .then(response => {
            console.log(response)
            navigate('/')})
        .catch(() => {
            throw Error("Couldn't delete the recipe.");
        })
    }
    
    return (
        <div className="recipe-details">
            { error && <div className="error-message">{error}</div> }
            { isPending && <div className="loading-message">Loading recipe...</div>}
            { recipe &&
                <article>
                    <h2>{recipe.name}</h2>
                    <p>{recipe.description}</p>
                    <img src={recipe.image} alt="recipe-image"></img>
                    <div>
                        <h5>Ingredients</h5>
                        <p>{recipe.ingredients}</p>
                        {!recipe.ingredients && <p>Recipe ingredients to be added.</p>}
                        <h5>Preparation</h5>
                        <p>{recipe.preparation}</p>
                        {!recipe.preparation && <p>Recipe preparation to be added.</p>}
                    </div>
                    <button className="btn btn-primary" onClick={() => handleDelete()}>Delete Recipe</button>
                </article>
            }
            
            { showButton && <img className='scrollToTop' src="/backToTop.svg" onClick={handleScrollToTop}></img>}
        </div>
    );
}
 
export default Recipe;