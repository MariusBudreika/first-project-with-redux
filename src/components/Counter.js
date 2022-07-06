import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/index";
import styles from "./Counter.module.scss";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increasetHandler = () => {
    dispatch(counterActions.increase(10));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={styles.container}>
      <h1>Redux counter</h1>
      {show && <div>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increasetHandler}>increment by 10</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle counter</button>
    </main>
  );
};

export default Counter;
