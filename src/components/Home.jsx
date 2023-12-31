import Recipes from "./Recipes";
import UseFetch from "./UseFetch";
import ScrollTop from "./ScrollTop";
import SearchBar from "./SearchBar";
import Notification from "./Notification";
import { useState } from "react";
import config from '../config';

function Home() {
    const jsonServerUrl = config.productionServerUrl;
    const {data:recipes, error, isPending} = UseFetch(jsonServerUrl);
    const [searchResults, setSearchResults] = useState([]);
    const {showButton, handleScrollToTop} = ScrollTop();

    

    return(
        <div className="home">
            <SearchBar setSearchResults={setSearchResults}/>
            <div className="notifications">
                <Notification uniqueId='apiLimitation' message="Creating and updating operations unsupported, API limitations."></Notification>
                { error && <Notification uniqueId='fetchError' message={error}></Notification> }
            </div>
            { isPending && <div className="loading-message">Loading delicious recipes...</div> }
            { searchResults.length > 0 ?
                <div className="searched-recipes">
                    <h3>Recipes</h3>
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