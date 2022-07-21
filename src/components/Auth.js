import React from "react";
import { useDispatch } from "react-redux";

import styles from "./Auth.module.scss";
import { authActions } from "../store/auth";

const Auth = () => {
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();

    dispatch(authActions.login());
  };

  return (
    <main className={styles.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={styles.field}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button className={styles.btn}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
