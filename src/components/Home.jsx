import Recipes from "./Recipes";
import UseFetch from "./UseFetch";
import ScrollTop from "./ScrollTop";
import SearchBar from "./SearchBar";
import { useState } from "react";
import config from '../config';

function Home() {
    const jsonServerUrl = config.productionServerUrl;
    const {data:recipes, error, isPending} = UseFetch(jsonServerUrl);
    const [searchResults, setSearchResults] = useState([]);
    const {showButton, handleScrollToTop} = ScrollTop();

    const deleteNotification = () => {
        document.getElementById('tmp-notification').parentElement.style.display = 'none';
    }

    return(
        <div className="home">
            <SearchBar setSearchResults={setSearchResults}/>
            <div className="notification">
                <p>Creating and updating operations aren't supported on current API.</p>
                <button id='tmp-notification' className="btn btn-primary" onClick={deleteNotification}>Dismiss</button>
            </div>
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