import { useState } from "react";


export default function App() {
  return (
    <>
      <Step />
    </>
  );
}

// Step component
function Step() {
  const [step, setStep] = useState(1);

  // handle sub step
  function handleSubStep() {
    setStep((item) => item - 1);
  }
  // handle add step
  function handleAddStep() {
    setStep((item) => item + 1);
  }

  return (
    <>
      <div>
        <button onClick={handleSubStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={handleAddStep}>+</button>
      </div>
      <div>
        <Counter step={step} />
      </div>
    </>
  );
}

// Counter component
function Counter({ step }) {
  const [count, setCount] = useState(0);

  // set the date => this will a tricky part for me otherwise code is easy
  const date = new Date("21 June 2027");
  date.setDate(date.getDate() + count);

  // handle sub count
  function handleSubCount() {
    setCount((item) => item - step);
  }
  // handle add count
  function handleAddCount() {
    setCount((item) => item + step);
  }
  return (
    <>
      <button onClick={handleSubCount}>-</button>
      <span>Count: {count}</span>
      <button onClick={handleAddCount}>+</button>
      {count < 0 ? (
        <p>
          {Math.abs(count)} days ago was {date.toDateString()}
        </p>
      ) : count === 0 ? (
        <p>Today is {date.toDateString()} </p>
      ) : (
        <p>
          {count} days from today is {date.toDateString()}
        </p>
      )}
    </>
  );
}
