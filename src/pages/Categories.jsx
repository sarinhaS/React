import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Categories.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const buscarDados = async () => {
      try {
        const resposta = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
        setCategories(resposta.data.categories);
      } catch (erro) {
        console.log(erro);
      }
    };

    buscarDados();
  }, []);

  return (
    <>
      <h1>Categorias de Receitas</h1>
      <div className="categories-container">
        {categories.map((categoria) => (
          <Link
            to={`/category/${categoria.strCategory}`}
            key={categoria.idCategory}
            className="category-card"
          >
            <img src={categoria.strCategoryThumb} alt={categoria.strCategory} />
            <h2>{categoria.strCategory}</h2>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Categories;
