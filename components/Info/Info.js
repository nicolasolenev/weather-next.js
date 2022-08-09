import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from '../../styles/Info.module.scss';
import Now from './Weather/Now';
import Details from './Weather/Details';
import Forecast from './Weather/Forecast';
import Button from './Button';
import Loader from '../Loader';
import { fetchWeather } from '../../store/weatherSlice';
import { getWeatherUrl } from '../../utils';

const TAB = {
  NOW: 'Now',
  DETAILS: 'Details',
  FORECAST: 'Forecast',
};

const Info = () => {
  const [openTab, setOpenTab] = useState(TAB.NOW);
  const dispatch = useDispatch();
  const city = useSelector((state) => state.selectedCity);
  const isActive = useSelector((state) => state.weather.isFetching);

  let weather;

  switch (openTab) {
    case TAB.DETAILS:
      weather = <Details />;
      break;

    case TAB.FORECAST:
      weather = <Forecast />;
      break;

    default:
      weather = <Now />;
  }

  useEffect(() => {
    const geo = navigator.geolocation;
    const successGeo = async ({ coords }) => {
      dispatch(
        fetchWeather(
          getWeatherUrl({ lat: coords.latitude, lon: coords.longitude })
        )
      );
    };
    const denyGeo = () => {
      dispatch(fetchWeather(getWeatherUrl({ city })));
    };
    geo.getCurrentPosition(successGeo, denyGeo);
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.info}>
      <div className={styles.info__content}>
        {isActive && <Loader />}
        {weather}
      </div>

      <div className={styles.info__tabs}>
        <ul className={styles.info__ul}>
          <li className={styles.info__li}>
            <Button
              tabName={TAB.NOW}
              setOpenTab={setOpenTab}
              openTab={openTab}
            />
          </li>

          <li className={styles.info__li}>
            <Button
              tabName={TAB.DETAILS}
              setOpenTab={setOpenTab}
              openTab={openTab}
            />
          </li>

          <li className={styles.info__li}>
            <Button
              tabName={TAB.FORECAST}
              setOpenTab={setOpenTab}
              openTab={openTab}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Info;
