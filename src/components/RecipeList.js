import React from "react";
import NavBar from "./NavBar";

function RecipeList() {
  return(
      <div>
        <NavBar/>
        <h2>Recipe List</h2>
        <ul>
          <li>Element 1</li>
          <li>Element 2</li>
        </ul>
      </div>
  )
}

export default RecipeList;