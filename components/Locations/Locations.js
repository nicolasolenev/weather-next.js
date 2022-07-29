import styles from '../../styles/Locations.module.scss';

const Locations = () => {
  return (
    <div className={styles.locations}>
      <h2 className={styles.locations__title}>Added Locations:</h2>

      <ul className={styles.locations__ul}>
        {/* {cities.map((city) => (
          <Location key={city} city={city} />
        ))} */}
      </ul>
    </div>
  );
};

export default Locations;
