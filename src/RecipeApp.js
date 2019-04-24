import React, { Component } from "react";
import Recipe from "./Recipe";
import RecipeInput from "./RecipeInput"
import RecipeList from "./RecipeList";
import Navbar from "./Navbar";
import "./RecipeApp.css";

class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state ={
      recipes: [
        {
          id:0,
          title: "Spaghetti",
          instructions:
            "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
          ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
          img: "https://www.wellplated.com/wp-content/uploads/2017/09/Healthy-Pumpkin-Milkshake.jpg"
        },
        {
          id:1,
          title: "Milkshake",
          instructions: "Combine ice cream and milk.  Blend until creamy",
          ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
          img:
            "https://www.wellplated.com/wp-content/uploads/2017/09/Healthy-Pumpkin-Milkshake.jpg"
        },
        {
          id:2,
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
      showForm: false
    }
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.nextCreatedId}
      return {
        nextCreatedId: prevState.nextCreatedId + 1,
        recipes: [...this.state.recipes, newRecipe ],
        showForm:false
      }
    });
  }
  render() {
    const {showForm} = this.state;
    return (
      <div className="App">
        <Navbar onNewRecipe ={()=> this.setState({showForm:true})}/>
        {showForm ? 
          <RecipeInput 
          onSave = {this.handleSave}
          onClose = { ()=>{this.setState({showForm:false})}}
          /> : null }
        <RecipeList  recipes ={this.state.recipes}/>
      </div>
    );
  }
}

export default RecipeApp;
