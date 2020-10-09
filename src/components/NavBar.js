import React from "react";
import {Link} from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return(
      <header className="Navbar">
        <div className="navbar-item">
          <Link to={"/"}>Recipes list</Link>
          <Link to={"/recipe/newRecipe"}>New Recipe</Link>
        </div>
        <div className="search-bar">
          <span className="navbar-item">Search</span>
          <input type="text" placeholder="Recipe name..."/>
        </div>
      </header>
  )
}

export default NavBar;