import React, { useRef, useCallback, useState } from "react";
import styles from "./search.module.scss";
import debounce from "lodash.debounce";
import { SearchContext } from "../../App";
import { useLocation } from "react-router-dom";

function Search() {
  const location = useLocation()
  const [value, setValue] = useState("")
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  const inputRef = useRef();
  const onClickClear = () => {
    setSearchValue("");
    setValue("");
    inputRef.current.focus();
  };
  
  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 300),
    [],
  )
  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  }

  return (
    location.pathname !== "/cart" && (
      <div className={styles.root}>
        <svg
          className={styles.img}
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 512 512"
          height="512px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 512 512"
          width="512px"
        >
          <path
            d="M503.866,477.974L360.958,335.052c28.725-34.544,46.017-78.912,46.017-127.336  c0-110.084-89.227-199.312-199.312-199.312C97.599,8.403,8.351,97.631,8.351,207.715c0,110.064,89.248,199.312,199.312,199.312  c48.435,0,92.792-17.292,127.336-46.017l142.908,142.922L503.866,477.974z M29.331,207.715c0-98.334,79.987-178.332,178.332-178.332  c98.325,0,178.332,79.998,178.332,178.332s-80.007,178.332-178.332,178.332C109.318,386.047,29.331,306.05,29.331,207.715z"
            fill="#37404D"
          />
        </svg>
        <input
          value={value}
          ref={inputRef}
          onChange={onChangeInput}
          className={styles.input}
          placeholder="Пошук"
        />
        {searchValue && (
          <svg
            onClick={onClickClear}
            className={styles.deletet}
            data-name="Capa 1"
            id="Capa_1"
            viewBox="0 0 20 19.84"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.17,10l3.89-3.89a.37.37,0,1,0-.53-.53L9.64,9.43,5.75,5.54a.37.37,0,1,0-.53.53L9.11,10,5.22,13.85a.37.37,0,0,0,0,.53.34.34,0,0,0,.26.11.36.36,0,0,0,.27-.11l3.89-3.89,3.89,3.89a.34.34,0,0,0,.26.11.35.35,0,0,0,.27-.11.37.37,0,0,0,0-.53Z" />
          </svg>
        )}
      </div>
    )
  );
}

export default Search;
