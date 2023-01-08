import React from "react";
import "./style.css"
export default function Navbar(props){
    return(
        <nav 
            className={props.darkMode ? "dark":""}
        >
            <div className="nav-bar">
                <div className="header">Black Jack</div>
                <p className="light-part">Light</p>
                <label class="switch">
                    <input type="checkbox" onClick={props.toggleDarkMode}/>
                    <span class="slider"></span>
                </label>
                <p className="dark-part">Dark</p>
            </div>
        </nav>
    )
}