import { InfoOutlined } from "@material-ui/icons";
import React from "react";
import {NavLink}  from "react-router-dom";

function Navigation(){
    
    return(
        <div>
                       
            <NavLink className="nav-link" to="/">
                Home
                <span className="sr-only">(current)</span>
            </NavLink>
        
            <NavLink className="nav-link" to="/search">
                Admin
            </NavLink>          
                
        </div>
    )
}

export default Navigation;