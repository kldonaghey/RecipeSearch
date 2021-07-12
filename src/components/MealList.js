import React from 'react';
import { Link } from 'react-router-dom';
//import './meallist.module.css';

const MealList = (props) => {
    return (
        //<div>MealList</div>
        <div className="container">
            <div className="row">
            { props.recipes.map((meal) => {
                return (
                    <div key={ meal.idMeal }
                        className= "col-md-4"
                        style= {{marginBottom: "2rem"}}>
                        <div className="recipe__box">
                            <img
                                className="recipe__box-img"
                                src={ meal.strMealThumb }
                                alt={ meal.strMeal }
                            />
                            <div className="recipe__text">
                                <h5 className="recipe__title">
                                    { meal.strMeal.length < 20 
                                    ? `${ meal.strMeal }` 
                                    : `${ meal.strMeal.substring(0,25)}...`}
                                </h5>
                                <p className="recipe__subtitle">
                                    <span>
                                        <Link to={{
                                            pathname: `/recipe/${ meal.idMeal }`,
                                            state: { meal }
                                        }}>View Recipe
                                        </Link>
                                    </span>
                                </p>
                            </div>
                            <button className="recipe_button">View Recipe</button>
                        </div>
                    </div>
                );
                //<p key={ idMeal }>{ strMeal }</p>
            })};
            </div>
        </div>
    );
}

export default MealList;