import { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from '../../styles/Search.module.scss';
import { fetchWeather } from '../../store/weatherSlice';

const Search = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setCity(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();
    dispatch(fetchWeather(getWeatherUrl({ city })));
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
          value={city}
        />

        <button className={styles.search__button} title="get weather" />
      </form>
    </div>
  );
};

export default Search;
