import './App.css';
import { v4 as uuidv4 } from 'uuid';
import foodsData from "./foods.json";
import { useState } from 'react';
import FoodBox from './components/FoodBox'
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';


function App() {
  const foods = foodsData.map((food) => ({ ...food, id: uuidv4() }))

  const [foodsList, setFoodslist] = useState(foods)

  const addNewFood = (newFood) => {
    const updatedFoods = [...foodsList, newFood]
    setFoodslist(updatedFoods)
  }

  const handleSearch = (searchList) => {
    if (searchList === "") {
      setFoodslist(foods)
    } else {
      const filteredFoods = [...foods].filter((food) =>
        food.name.toLowerCase().includes(searchList.toLowerCase())
      )
      setFoodslist(filteredFoods)
    }
  }

  const deleteFood = (id) => {
    const updatedFoods= [...foodsList].filter((food) => food.id !== id)
    setFoodslist(updatedFoods)
  }

  return (
    <div className="App">
      <div>
      <Search handleSearch={handleSearch} />
      {foodsList.map((food) => {
        return (
          <div className="main" key={food.id}>
            <FoodBox food={food} deleteFood={deleteFood} />
          </div>
        )
      })}
      <AddFoodForm addNewFood={addNewFood} />
      </div>
    </div>
  );
  }

export default App;
