import styles from "./Header.module.scss";

import React from "react";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>Redux Auth</div>
      <nav className={styles.list}>
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          <li>
            <button className={styles.btn}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
