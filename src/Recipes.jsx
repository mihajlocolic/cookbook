import { Link } from "react-router-dom";
const Recipes = ({recipes}) => {
    return (
        <div className="recipe-list">
            {recipes.toReversed().map((recipe) => (
                <div className="card" style={{width: 25 + 'rem'}} key={recipe.id}>
                    <Link to={`/recipes/${recipe.id}`}>
                    <img src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg" className="card-img-top" alt="..."/>
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