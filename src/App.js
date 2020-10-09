import React from 'react';
import './App.css';
import RecipeList from "./components/RecipeList";
import { Route, Switch} from 'react-router-dom';
import RecipeDetail from "./components/RecipeDetail";

function App() {
  return (
    <Switch>
      <Route exact
             path="/"
             render={(routeProps) => <RecipeList {...routeProps}/>}
      />
      <Route exact
             path="/recipe/newRecipe"
             render={routeProps =>
                 <RecipeDetail isNew={true} {...routeProps}/>}
      />
      <Route exact
             path="/recipe/:id"
             render={routeProps =>
                 <RecipeDetail isNew={false} recipe_id={routeProps.match.params.id}/>}
      />
    </Switch>
  );
}

export default App;
