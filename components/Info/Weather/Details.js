import { useSelector } from 'react-redux';

import styles from '../../../styles/Details.module.scss';
import { getTime } from '../../../utils';

const Details = () => {
  const weather = useSelector((state) => state.weather);
  const data = weather.data.weather;

  return (
    weather.isReady && (
      <div className={styles.weather__details}>
        <ul className={styles.weather__details_ul}>
          <li
            className={`${styles.weather__details_li} ${styles.weather__details_city}`}
          >
            {data.name}
          </li>
          <li className={styles.weather__details_li}>
            Temperature: {Math.round(data.main.temp)}°
          </li>
          <li className={styles.weather__details_li}>
            Feels like: {Math.round(data.main.feels_like)}°
          </li>
          <li className={styles.weather__details_li}>
            Weather: {data.weather[0].main}
          </li>
          <li className={styles.weather__details_li}>
            Sunrise: {getTime(data.sys.sunrise)}
          </li>
          <li className={styles.weather__details_li}>
            Sunset: {getTime(data.sys.sunset)}
          </li>
        </ul>
      </div>
    )
  );
};

export default Details;
