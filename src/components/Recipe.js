import React from "react";
import { Link } from "react-router-dom";
import "./recipe.module.css";
//import Table from './Table';
class Recipe extends React.Component {
  state = {
    resultMeal: [],
    error: null,
  };
  componentDidMount = async (props) => {
    const ingredient = props.location.state.meal.idMeal;
    //const request = await fetch(`https://cors-anywhere.herokuapp.com/http://www.themealdb.com/api/json/v1/1/lookup.php?i=${ingredient}`)
    const request = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ingredient}`
    );
    const response = await request.json();
    //const videoID = res.meals.strYoutube.replaceAll("\\", "");
    this.setState({ resultMeal: response.meals });
  };
  render() {
    const recipe = this.state.resultMeal;
    console.log(recipe);
    return (
      <div className="container">
        <div className="row">
          {recipe.map((meal) => {
            return (
              <div
                key={meal.idMeal}
                className="col-md-4"
                style={{ marginBottom: "2rem" }}
              >
                <div className="recipe_title">
                  <h2>{meal.strMeal}</h2>
                </div>
                <div className="recipe___img">
                  <img
                    className="recipe_img"
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                  />
                </div>
                <div className="category">
                  <h6>Category: {meal.strCategory}</h6>
                </div>
                <div className="ingred__meas">
                  <p>Ingredients and Measurements: Coming soon!</p>
                </div>
                <div className="instructions">
                  <h4>Instructions</h4>
                  <p>{meal.strInstructions}</p>
                </div>
                <div className="video">
                  <p>Video Coming Soon.</p>
                </div>
              </div>
            );
          })}
          ;
          <button className="home_button">
            <Link to="/">Home</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Recipe;
