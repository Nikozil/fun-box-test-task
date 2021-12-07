import React from 'react';
import styles from '../styles/Header.module.scss';
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles['header__title']}>
        Тестовое задание для FunBox{' '}
      </div>
      <div className={styles['header__author']}>
        Выполнил Масляный Александр
      </div>
    </header>
  );
};

export default Header;
