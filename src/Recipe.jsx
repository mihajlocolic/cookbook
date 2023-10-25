import { useParams } from "react-router-dom";
import UseFetch from "./UseFetch";
import ScrollTop from "./ScrollTop";

const Recipe = () => {
    const {id} = useParams()
    const { data:recipe, error, isPending } = UseFetch('http://localhost:8000/cookbook/' + id)
    const {showButton, handleScrollToTop} = ScrollTop
    
    return (
        <div className="recipe-details">
            { error && <div className="error-message">{error}</div> }
            { isPending && <div className="loading-message">Loading recipe...</div>}
            { recipe &&
                <article>
                    <h2>{recipe.name}</h2>
                    <p>{recipe.description}</p>
                    <div>
                        <h5>Ingridients</h5>
                        <p>{recipe.ingridients}</p>
                        {!recipe.ingridients && <p>Recipe ingridients to be added in the working version.</p>}
                    </div>
                
                </article>
            }
            { showButton && <img className='scrollToTop' src="/backToTop.svg" onClick={handleScrollToTop}></img>}
        </div>
    );
}
 
export default Recipe;