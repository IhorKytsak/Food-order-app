import { Fragment } from 'react';
import mealsImg from '../../assets/meals.jpg';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>YummyMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImg} alt='Food img' />
      </div>
    </Fragment>
  );
};

export default Header;
