import { useState } from "react";
import config from '../config';

const SearchBar = ({setSearchResults}) => {

    const jsonServerUrl = config.productionServerUrl;
    const [input, setInput] = useState('');
    
    
    const fetchData = (value) => {
        fetch(jsonServerUrl)
        .then((response) => response.json())
        .then((json) => {
            const results = json.filter((recipe) => {
                return (
                    value && recipe.name && recipe.name.toLowerCase().includes(value.toLowerCase())
                );
            });
            console.log(results);
            setSearchResults(results);
        });
    }

    const handleSearch = (value) => {
        setInput(value);
        fetchData(value);
    }

    return (
        <div className="search-bar">
            <input
                type="text"
                value={input}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Type to search"
            ></input>
        </div>
    );
}
 
export default SearchBar;