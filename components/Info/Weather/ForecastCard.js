import Image from 'next/image';

import styles from '../../../styles/Forecast.module.scss';
import { getIconUrl, getDay, getTime } from '../../../utils/index';

const ForecastCard = ({ data }) => {
  return (
    <div className={styles.weather__forecast_card}>
      <div className={styles.weather__forecast_date}>{getDay(data.dt)}</div>
      <div className={styles.weather__forecast_time}>{getTime(data.dt)}</div>
      <div className={styles.weather__forecast_options}>
        <ul className={styles.weather__forecast_options_ul}>
          <li className={styles.weather__forecast_options_li}>
            Temperature: {Math.round(data.main.temp)}°
          </li>
          <li className={styles.weather__forecast_options_li}>
            Feels like: {Math.round(data.main.feels_like)}°
          </li>
        </ul>
      </div>
      <div className={styles.weather__forecast_weather}>
        <span className={styles.weather__forecast_weather_span}>
          {data.weather[0].main}
        </span>
        <div className={styles.weather__forecast_weather_icon}>
          <Image
            src={getIconUrl({ iconId: data.weather[0].icon, isForecast: true })}
            alt="weather"
            width={'50px'}
            height={'50px'}
          />
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;
