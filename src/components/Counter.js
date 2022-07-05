import { useSelector, useDispatch } from "react-redux";
import styles from "./counter.module.scss";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const increasetHandler = () => {
    dispatch({ type: "increase", amount: 10 });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const toggleHandler = () => {
    dispatch({ type: "toggle" });
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
      <button onClick={toggleHandler}>Toggle counter</button>
    </main>
  );
};

export default Counter;
