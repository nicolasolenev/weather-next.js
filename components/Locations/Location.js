import { useDispatch } from 'react-redux';

import styles from '../../styles/Locations.module.scss';
import { fetchWeather, deleteFavorite } from '../../store/weatherSlice';
import { getWeatherUrl } from '../../utils';

const Location = ({ city }) => {
  const dispatch = useDispatch();

  const cityHandler = () => {
    dispatch(fetchWeather(getWeatherUrl({ city })));
  };

  const deleteHandler = () => dispatch(deleteFavorite(city));

  return (
    <li className={styles.locations__li}>
      <button
        className={styles.locations__city}
        title="get weather"
        onClick={cityHandler}
      >
        {city}
      </button>

      <button
        className={styles.locations__city_delete_button}
        title="delete city"
        onClick={deleteHandler}
      />
    </li>
  );
};

export default Location;
