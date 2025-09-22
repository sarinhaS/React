import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./CategoryMeals.css";

const CategoryMeals = () => {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const buscarPratos = async () => {
      try {
        const resposta = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
        );
        setMeals(resposta.data.meals);
      } catch (erro) {
        console.error("Erro ao buscar pratos:", erro);
      }
    };

    buscarPratos();
  }, [name]);

  return (
    <div>
      <h1>Pratos da categoria: {name}</h1>
      <div className="meals-container">
        {meals.map((meal) => (
          <Link to={`/meal/${meal.idMeal}`} key={meal.idMeal} className="meal-card">
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h2>{meal.strMeal}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryMeals;
