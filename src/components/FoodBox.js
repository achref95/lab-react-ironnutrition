import { Card, Col, Button } from "antd";
const Foodbox = ({food, deleteFood}) => {
  return (
    <div>
        <Col>
            <Card
                title={food.name}
                style={{ width: 230, height: 300, margin: 10 }}
            >
                <img src={food.image} height={60} alt="food" />
                <p>{food.calories}</p>
                <p>{food.servings}</p>
                <p>
                <b>Total Calories: {food.calories * food.servings} </b> kcal
                </p>
                <Button type="primary" onClick={() => deleteFood(food.id)}> Delete </Button>
            </Card>
        </Col>      
    </div>
  )
}

export default Foodbox
