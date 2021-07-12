import React from 'react';
import {Link} from 'react-router-dom';
import './recipe.module.css';

const Recipe = () => async (props) => {
    const ingredient = props.location.state.meal.idMeal;
    const req = await fetch(`https://cors-anywhere.herokuapp.com/http://www.themealdb.com/api/json/v1/1/lookup.php?i=${ingredient}`)
    const res = await req.json();
    //const videoID = res.meals.strYoutube.replaceAll("\\", "");
    return(        
        <div className = "container">
            <div className = "row">
                {res.meals.map((meal) => {
                    return(
                        <div key={ meal.idMeal }
                            className= "col-md-4"
                            style={{marginBottom: "2rem"}}>
                            <div className="recipe_title">
                                <h2>
                                    { meal.strMeal }
                                </h2>
                            </div>
                            <div className="recipe___img">
                                <img
                                    className="recipe_img"
                                    src={meal.strMealThumb}
                                    alt={meal.strMeal}
                                />
                                <div className="recipe__name">
                                    <h4>
                                        { meal.strMealThumb }
                                    </h4>
                                </div>
                            </div>
                            <div className="category">
                                <h6>
                                    Category: { meal.strCategory }
                                </h6>
                            </div>
                            <div className="ingred__meas">
                                <p>Ingredients and Measurements: Coming soon!</p>
                            </div>
                            <div className="instructions">
                                <p>Instructions</p>
                                <p>
                                    { meal.strInstructions }
                                </p>
                            </div>
                            <div className="video">
                                <p>Video Coming Soon.</p>
                            </div>
                        </div>
                    );
                })};
                <button className="home_button">
                    <Link to="/">Home</Link>
                </button>
            </div>
        </div>
    );
}

export default Recipe;