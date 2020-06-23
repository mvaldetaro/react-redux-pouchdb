import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";

class NavBar extends PureComponent {
    render() {
        return (
            <nav className="navbar">
                <h1><Link to="/">Notes</Link></h1>
                <div className="navbar__buttons">
                    <Link to="/new" className="btn">Add Nota</Link>
                </div>
            </nav>
        );
    }
}

export default NavBar;