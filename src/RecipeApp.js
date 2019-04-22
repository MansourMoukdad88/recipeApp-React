import React, { Component } from "react";
import Recipe from "./Recipe";
import RecipeList from "./RecipeList";
import Navbar from "./Navbar";
import "./RecipeApp.css";

class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state ={
      recipes: [
        {
          id:1,
          title: "Spaghetti",
          instructions:
            "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
          ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
          img: "http://recipetineats.com/wp-content/uploads/2014/06/Pasta1.jpg"
        },
        {
          id:2,
          title: "Milkshake",
          instructions: "Combine ice cream and milk.  Blend until creamy",
          ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
          img:
            "https://www.wellplated.com/wp-content/uploads/2017/09/Healthy-Pumpkin-Milkshake.jpg"
        },
        {
          id:3,
          title: "Avocado Toast",
          instructions:
            "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
          ingredients: [
            "2 slices of bread",
            "1 avocado",
            "1 tablespoon olive oil",
            "1 pinch of salt",
            "pepper"
          ],
          img:
            "https://cookieandkate.com/images/2012/04/avocado-toast-variations.jpg"
        }
      ],
      nextCreatedId:3,
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <RecipeList  recipes ={this.state.recipes}/>
      </div>
    );
  }
}

export default RecipeApp;
