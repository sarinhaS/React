import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./MealDetail.css";

const MealDetail = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const buscarDetalhes = async () => {
      try {
        const resposta = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        setMeal(resposta.data.meals[0]);
      } catch (erro) {
        console.error("Erro ao buscar detalhes da receita:", erro);
      }
    };

    buscarDetalhes();
  }, [id]);

  if (!meal) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="meal-detail">
      <h1>{meal.strMeal}</h1>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <p>
        <strong>Categoria:</strong> {meal.strCategory}
      </p>
      <p>
        <strong>Origem:</strong> {meal.strArea}
      </p>
      <h2>Instruções</h2>
      <p>{meal.strInstructions}</p>
    </div>
  );
};

export default MealDetail;
