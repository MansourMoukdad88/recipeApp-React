import React, { Component } from "react";
import PropsTypes from "prop-types";
import "./Recipe.css";

class Recipe extends Component {
  static propsTypes = {
    title: PropsTypes.string.isRequired,
    ingredients: PropsTypes.arrayOf(PropsTypes.string).isRequired,
    instructions: PropsTypes.string.isRequired,
    img: PropsTypes.string.isRequired,
    id: PropsTypes.number.isRequired,
    onDelete: PropsTypes.func.isRequired
  };
  render() {
    const { title, img, instructions, id, onDelete } = this.props;
    const ingredients = this.props.ingredients.map((ing, index) => (
      <li key={index}>{ing}</li>
    ));

    return (
      <div className="recipe-card">
        <div className="recipe-card-img">
          <img src={img} alt={title} />
        </div>
        <div />
        <div className="recipe-card-content">
          <h3 className="recipe-title"> {title}</h3>
          <h4>Ingredients: </h4>
          <ul>{ingredients}</ul>
          <h4>Instructions: </h4>
          <p>{instructions}</p>
          <button type="button" onClick={()=> onDelete(id)}>DELETE</button>
        </div>
      </div>
    );
  }
}

export default Recipe;
