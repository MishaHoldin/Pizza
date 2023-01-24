import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
import "../scss/app.scss";
import Sort from "../components/Sort";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import CategoriesTitle from "../components/CategoriesTitle";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice";
import { SearchContext } from "../App";
import axios from "axios";

function Home() {
  const dispatch = useDispatch();

  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sort = useSelector((state) => state.filter.sort.sortProperty);

  const fetchPizza = async () => {
    setIsLoading(true);

    const order = sort.includes("-") ? "asc" : "desc";
    const sortBy = sort.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    try {
      const res = await axios.get(
        `https://63bda2ffedc107f8e1ddf056.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}`
      );
      setItems(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log("Error", error);
    } finally {
      setIsLoading(false);
    }
    window.scrollTo(0, 0);
  };

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  useEffect(() => {
    fetchPizza();
  }, [categoryId, sort, searchValue]);

  return (
    <>
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategories={onChangeCategory}
        />
        <Sort />
      </div>
      <CategoriesTitle
        value={categoryId}
      />
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((item) => (
              <PizzaBlock
                key={item.id}
                {...item}
              />
            ))}
      </div>
    </>
  );
}

export default Home;
