import React from 'react';
import {NavLink} from "react-router-dom";

import './App.css';
import Routes from "./routes";


function App() {
    return (
        <div>
            <nav className="nav nav-pills">
                <NavLink className="nav-link nav-item" exact to="/">Home</NavLink>
                <NavLink className="nav-link" to="/users">Users</NavLink>
                <NavLink className="nav-link" to="/posts">Posts</NavLink>
                <NavLink className="nav-link" to="/comments">Comments</NavLink>
            </nav>

            <Routes/>


        </div>
    );
}

export default App;
