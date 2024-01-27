import { useState } from "react";

function App() {
  return <Counter />;
}

// count component
function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  /* JS logic for get the date*/
  const date = new Date("21 June 2027");
  date.setDate(date.getDate() + count);

  // handleSub function
  function handleSub() {
    setCount((item) => item - step);
  }

  // handleAdd function
  function handleAdd() {
    setCount((item) => item + step);
  }

  // handleStep function
  function handleStep(e) {
    setStep(Number(e.target.value));
  }

  // handleCount
  function handleCount(e) {
    setCount(Number(e.target.value));
  }

  // hadleReset function
  function handleReset() {
    setCount((item) => (item = 0));
    setStep((item) => (item = 1));
  }

  return (
    <>
      <input
        type="range"
        min="0"
        max="10"
        value={step}
        onChange={(e) => handleStep(e)} // here we controlled the elements of input slider to slide forward with increase value
      ></input>
      <span>Step: {step}</span>

      <div>
        <button onClick={handleSub}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => handleCount(e)} // here we controlled the elements of input box to change the value by simple type the value
        />
        <button onClickCapture={handleAdd}>+</button>

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

        {/* conditionally render the reset button on the basis of count and step update value*/}
        {count !== 0 || step !== 1 ? (
          <button onClick={handleReset}>Reset</button>
        ) : null}
      </div>
    </>
  );
}

// by when we update any number consist value in state that will be convert into string so we have manually type cast string to number.
export default App;
