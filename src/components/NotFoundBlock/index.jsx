import React from 'react'
import styles from './NotFoundBlock.module.scss'
import { Link } from 'react-router-dom'
import notFound from "../../assets/img/notFound.png";

function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <div>
      <img
        className={styles.img}
        src={notFound}
        alt="notFound"
      />
      </div>
      <h1 className={styles.text}>
        На жаль такої сторінки не існує
        <br />
        поверніться на головну
      </h1>
      <Link
        to="/"
        className="button button--black"
      >
        <span>Повернутись на головну</span>
      </Link>
    </div>
  );
}

export default NotFoundBlock