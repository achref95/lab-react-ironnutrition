import { Input, Button } from "antd";
import { useState } from 'react';

const AddFoodForm = ({ addNewFood }) => {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(1);

    const handleNameInput = e => setName(e.target.value);
    const handleImageInput = e => setImage(e.target.value);
    const handleCaloriesInput = e => setCalories(e.target.value);
    const handleServingsInput = e => setServings(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFood = { 
          name, 
          image,
          calories,
          servings
        }
     
        console.log("Submitted", newFood);
        addNewFood(newFood);
        
        setName("");
        setImage("");
        setCalories(0);
        setServings(1);
    }

    return (
        <div>
            <h4>Add a new food</h4>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <Input
                    type="text"
                    name="title"
                    value={name}
                    onChange={handleNameInput}
                />
                <label>Image:</label>
                <Input
                    type="text"
                    name="image"
                    value={image}
                    onChange={handleImageInput}
                />
                <label>Calories:</label>
                <Input
                    type="number"
                    name="calories"
                    value={calories}
                    onChange={handleCaloriesInput}
                />
                <label>Servings:</label>
                <Input
                    type="number"
                    name="servings"
                    value={servings}
                    onChange={handleServingsInput}
                />
                <Button type="primary" htmlType="submit">Create</Button>
            </form>
        </div>
    );
}

export default AddFoodForm;
