import {Link} from 'react-router-dom';


function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-brand">
                <h2>Cookbook</h2>
            </div>
            
            <div className="links">
                <Link to={'/'}>Home</Link>
                <Link to={'/addrecipe'}>
                    <button type="button" className="btn btn-primary">Add Recipe</button>
                </Link>
            </div>
        </div>
    )
};

export default Navbar;