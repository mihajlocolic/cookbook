import {Link} from 'react-router-dom';

function Navbar() {
    const handleSearch = () => {

    }


    return (
        <div className="navbar">
            <div className="navbar-brand">
                <h2>Cookbook</h2>
            </div>
            <div className="links">
                <Link to={'/'}>Home</Link>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Christmas cookies" aria-label="Search"/>
                    <button className="btn btn-primary" type="submit">Search</button>
                </form>
                <Link to={'/addrecipe'}>
                    <button type="button" className="btn btn-primary">Add Recipe</button>
                </Link>
            </div>
            
        </div>
    )
};

export default Navbar;