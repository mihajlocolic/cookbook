import Recipes from "./Recipes";
import UseFetch from "./UseFetch";
import ScrollTop from "./ScrollTop";
import SearchBar from "./SearchBar";
import { useState } from "react";

function Home() {
    const {data:recipes, error, isPending} = UseFetch('http://localhost:8000/recipes');
    const [searchResults, setSearchResults] = useState([]);
    const {showButton, handleScrollToTop} = ScrollTop();

    return(
        <div className="home">
            <SearchBar setSearchResults={setSearchResults}/>
            { error && <div className="error-message">{error}</div> }
            { isPending && <div className="loading-message">Loading delicious recipes...</div> }
            { searchResults.length > 0 ?
                <div className="searched-recipes">
                    <h3>Searched Recipes</h3>
                    <Recipes recipes={searchResults}></Recipes>
                </div>
                : 
                <div className="listed-recipes">
                    <h3>Recipes</h3>
                    <Recipes recipes={recipes} ></Recipes>
                </div>
            }
            { showButton && <img className='scrollToTop' src="/backToTop.svg" onClick={handleScrollToTop}></img>}
        </div>
    );
}

export default Home;