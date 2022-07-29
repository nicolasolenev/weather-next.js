import styles from '../../styles/Info.module.scss';

const Button = ({ tabName, setOpenTab, openTab }) => {
  const clickHandler = () => {
    setOpenTab(tabName);
  };

  return (
    <button
      // className={
      //   openTab === tabName
      //     ? 'info__tabs_button info__tabs_button-active'
      //     : 'info__tabs_button'
      // }

      // className={`info__tabs_button ${
      //   openTab === tabName && 'info__tabs_button-active'
      // }`}

      className={`${styles.info__tabs_button} ${
        openTab === tabName ? styles.info__tabs_button_active : ''
      }`}
      onClick={clickHandler}
    >
      {tabName}
    </button>
  );
};

export default Button;
