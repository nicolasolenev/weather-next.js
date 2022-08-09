import { useSelector } from 'react-redux';

import styles from '../../../styles/Forecast.module.scss';
import ForecastCard from './ForecastCard';

const Forecast = () => {
  const weather = useSelector((state) => state.weather);
  const data = weather.data.forecast;

  return (
    weather.isReady && (
      <div className={styles.weather__forecast}>
        <h2 className={styles.weather__forecast_city}>{data.city.name}</h2>

        <div className={styles.weather__forecast_cards}>
          {data.list &&
            data.list.map((data) => <ForecastCard key={data.dt} data={data} />)}
        </div>
      </div>
    )
  );
};

export default Forecast;
