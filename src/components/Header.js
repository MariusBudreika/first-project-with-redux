import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";

import styles from "./Header.module.scss";

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={styles.header}>
      <div className={styles.title}>Redux Auth</div>
      {isAuth && (
        <nav className={styles.list}>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button className={styles.btn} onClick={logoutHandler}>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
