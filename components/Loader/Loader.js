import React from 'react';
import { TailSpin } from 'react-loader-spinner';

import styles from '../../styles/Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.loader_wrapper}>
      <TailSpin color="gray" height={80} width={80} />
    </div>
  );
};

export default Loader;
