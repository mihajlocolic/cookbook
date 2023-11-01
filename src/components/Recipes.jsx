import { Link } from "react-router-dom";
const Recipes = ({recipes}) => {

    return (
        <div className="recipe-list">
            { recipes && recipes.map(recipe => (
                <div className="card" style={{width: 25 + 'rem'}} key={recipe.id}>
                    <Link to={`/recipes/${recipe.id}`}>
                    <img src={recipe.image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h4>{recipe.name}</h4>
                        <p className="card-text">{recipe.description}</p>
                    </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default Recipes;