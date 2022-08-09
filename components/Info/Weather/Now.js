import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';

import styles from '../../../styles/Now.module.scss';
import { getIconUrl } from '../../../utils';
import { addFavorite } from '../../../store/weatherSlice';

const Now = () => {
  const weather = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  const favoriteCities = useSelector((state) => state.favoriteCities);
  const data = weather.data.weather;

  const addToFavoriteHandler = () => dispatch(addFavorite(data.name));

  return (
    weather.isReady && (
      <div className={styles.weather__now}>
        <div className={styles.weather__temperature}>{`${Math.round(
          data.main.temp
        )}°`}</div>
        <div className={styles.weather__icon}>
          <Image
            src={getIconUrl({ iconId: data.weather[0].icon })}
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
              onClick={addToFavoriteHandler}
            />
          )}
        </div>
      </div>
    )
  );
};

export default Now;
