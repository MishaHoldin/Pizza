import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom';

function FullPizza() {
  const { id } = useParams();
  const [pizza, setPizza] = React.useState();
 
  React.useEffect(() => {
    async function fetchPizza() {
      try{
      const { data } = await axios.get(
        "https://63bda2ffedc107f8e1ddf056.mockapi.io/items/" + id
        );
        setPizza(data)
      } catch(erorr) {
        console.log(erorr, "Erorr")
        }
    }
    fetchPizza();
  }, [])
  
  if (!pizza) {
    return "Загрузка ..."
  }
  return (
    <div className="container">
      <div className="pizza-block__wrapp">
        <div className="pizza-block__fullpizza">
          <img
            className="pizza-block__image"
            src={pizza.imageUrl}
            alt="pizza"
          />
          <h2 className="pizza-block__title--fullblock">{pizza.title}</h2>
          <p className="pizza-block__components">{pizza.components}</p>
          <Link
            to="/"
            className="button button--black"
          >
            <span>Повернутись на головну</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FullPizza