/* eslint-disable no-undef */
import React, {Component} from 'react';
import './App.css';
import Form from './components/Form';
import MealList from './components/MealList';


class App extends React.Component{
  state = {
    recipes: [],
    error: null
  }
  getMealInfo = async (e) => {
    e.preventDefault();
    const ingredient = e.target.elements.searchValue.value;

    const request = await fetch(`http://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`, {mode: 'no-cors'});
    //const request = await fetch(`https://cors-anywhere.herokuapp.com/http://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const response = await request.json();
    if(!ingredient){
      this.setState({error: "Please provide a value"});
    }else{
      this.setState({ recipes: response.meals, error: null });
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">RecipeSearch</h1>
        </header>
        <Form getMealInfo={ this.getMealInfo }/>
        {
          this.state.error !== null ? 
          <div style= {{color:"fff", textAlign:"center"}}>{this.state.error}</div> :
          <MealList recipes= {this.state.recipes}/>
        }
      </div>
    );
  }
}

export default App;
