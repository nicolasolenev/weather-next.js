import Image from 'next/image';

import styles from '../../../styles/Now.module.scss';

const initialData = {
  name: 'Aktobe',
  main: {
    temp: 10,
  },
};

const favoriteCities = [];

const Now = ({ data }) => {
  return (
    <div className={styles.weather__now}>
      <div className={styles.weather__temperature}>{`${Math.round(
        data.main.temp
      )}°`}</div>
      <div className={styles.weather__icon}>
        <Image
          src="https://openweathermap.org//img/wn/04d@4x.png"
          width="200px"
          height="200px"
          alt={'weather'}
        />
      </div>
      <div className={styles.weather__city}>{data.name}</div>
      <div className={styles.weather__add_location}>
        {!favoriteCities.includes(data.name) && (
          <button
            className={styles.weather__add_location_button}
            title="add to favorite"
          />
        )}
      </div>
    </div>
  );
};

export default Now;
