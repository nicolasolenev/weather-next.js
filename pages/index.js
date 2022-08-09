import Head from 'next/head';

import Search from '../components/Search';
import Info from '../components/Info';
import Locations from '../components/Locations';
import styles from '../styles/Weather.module.scss';

const Weather = () => (
  <>
    <Head>
      <title>Weather</title>
      <meta name="description" content="get the weather forecast" />
    </Head>
    <div className={styles.container}>
      <div className={styles.weather}>
        <Search />
        <div className={styles.weather__container}>
          <Info />
          <Locations />
        </div>
      </div>
    </div>
  </>
);

export default Weather;
