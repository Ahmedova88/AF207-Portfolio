import React, { useState } from "react";
import styles from "./Counter.module.css";
import { SlCalculator } from "react-icons/sl";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const Increment = () => setCount(count + 1);
  const Decrement = () => setCount(count - 1);

  const StepIncrement = () => setCount(count + Number(step));
  const StepDecrement = () => setCount(count - Number(step));

  return (
    <div className={styles.container}>
      <h2 className={styles.title}><SlCalculator />  Counter</h2>
      <div className={styles.counterBox}>
        <span className={styles.count}>{count}</span>
        <div className={styles.buttons1}>
          <button onClick={Decrement}>-1</button>
          <button onClick={Increment}>+1</button>
        </div>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(e.target.value)}
          className={styles.input}
        />
        <div className={styles.buttons2}>
          <button onClick={StepDecrement}>-{step} Decrease</button>
          <button onClick={StepIncrement}>+{step} Increase</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
