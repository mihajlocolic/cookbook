
import RecentRecipes from "./Recipes";
import UseFetch from "./UseFetch";
import ScrollTop from "./ScrollTop";

function Home() {
    const {data:recipes, error, isPending} = UseFetch('http://localhost:8000/cookbook')
    const {showButton, handleScrollToTop} = ScrollTop()

    return(
        <div className="home">
            <h3>Recipes</h3>
            { error && <div className="error-message">{error}</div> }
            { isPending && <div className="loading-message">Loading delicious recipes...</div> }
            { recipes && <RecentRecipes recipes={recipes}></RecentRecipes>}
            { showButton && <img className='scrollToTop' src="/backToTop.svg" onClick={handleScrollToTop}></img>}
        </div>
    )
};

export default Home;