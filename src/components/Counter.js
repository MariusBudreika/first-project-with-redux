import { useSelector, useDispatch } from "react-redux";
import styles from "./counter.module.scss";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <main className={styles.container}>
      <h1>Redux counter</h1>
      <div>{counter}</div>
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
    </main>
  );
};

export default Counter;
