import Head from 'next/head';

import Search from '../components/Search';
import Info from '../components/Info';
import Locations from '../components/Locations';
import styles from '../styles/Weather.module.scss';

export const getServerSideProps = async () => {
  const response = await fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=Aktobe&appid=1ecee8957cc21a11ca80c92ee63c1841&units=metric'
  );
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
};

const Weather = ({ data }) => (
  <>
    <Head>
      <title>Weather</title>
      <meta name="description" content="get the weather forecast" />
    </Head>
    <div className={styles.container}>
      <div className={styles.weather}>
        <Search />
        <div className={styles.weather__container}>
          <Info data={data} />
          <Locations />
        </div>
      </div>
    </div>
  </>
);

export default Weather;
