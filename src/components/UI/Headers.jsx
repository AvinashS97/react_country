import {NavLink} from "react-router-dom";

export const Headers =() => {
    return (
        <header>
            <div className="container">
                <div className="navbar-grid">
                    <div className="Logo">
                        <NavLink to="/">
                            <h1>WorldAtlas</h1>
                        </NavLink>
                    </div>

                    <nav>
                        <ul>
                            <li> <NavLink to="/"></NavLink></li>
                            <li> <NavLink to="/"></NavLink></li>
                            <li> <NavLink to="/"></NavLink></li>
                            <li> <NavLink to="/"></NavLink></li>
                            <li> <NavLink to="/"></NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

// 46:23