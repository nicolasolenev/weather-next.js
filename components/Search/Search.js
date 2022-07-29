import { useState } from 'react';

import styles from '../../styles/Search.module.scss';

const getWeather = async (city) => {
  const response = await fetch(
    `http://localhost:3000/api/weather?city=${city}`
  );
  const data = await response.json();
  console.log(data);
};

const Search = () => {
  const [value, setValue] = useState('');

  const inputHandler = (e) => {
    setValue(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();
    getWeather(value);
    setValue('');
  };

  return (
    <div className={styles.search}>
      <form className={styles.search__form} onSubmit={formHandler}>
        <input
          className={styles.search__input}
          type="text"
          placeholder="Aktobe"
          onChange={inputHandler}
        />

        <button className={styles.search__button} title="get weather" />
      </form>
    </div>
  );
};

export default Search;
