import { useState } from 'react';

import Button from './Button';
import styles from '../../styles/Info.module.scss';

const TAB = {
  NOW: 'Now',
  DETAILS: 'Details',
  FORECAST: 'Forecast',
};

import Now from './Weather/Now';

const Info = ({ data }) => {
  const [openTab, setOpenTab] = useState(TAB.NOW);

  let weather;

  switch (openTab) {
    case TAB.DETAILS:
      // weather = <Details />;
      weather = <h1>Weather Details</h1>;
      break;

    case TAB.FORECAST:
      // weather = <Forecast />;
      weather = <h1>Weather Forecast</h1>;
      break;

    default:
      weather = <Now data={data} />;
  }

  return (
    <div className={styles.info}>
      <div className={styles.info__content}>{weather}</div>

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
