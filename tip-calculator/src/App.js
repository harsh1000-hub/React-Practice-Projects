import "./App.css";
import { useState } from "react";
export default function App() {
  // create global state for InputBox and TipMessage component
  const [billValue, setBillValue] = useState(Number(0));
  // create global state for global state for friend1 tip Suggestions
  const [friend1Tip, setFriend1Tip] = useState(Number(0));
  // create global state for global state for friend2 tip Suggestions
  const [friend2Tip, setFriend2Tip] = useState(Number(0));

  // handle Reset function
  function handleReset() {
    setBillValue(0);
  }

  return (
    <div className="App">
      <span>How much was the bill?</span>
      <InputBox billValue={billValue} handleBillValue={setBillValue} />
      <FriendSuggestions onTipSelect={setFriend1Tip}>
        <span>How did you like the services</span>
      </FriendSuggestions>
      <FriendSuggestions onTipSelect={setFriend2Tip}>
        <span>How did your friend like the services</span>
      </FriendSuggestions>
      <TipMessage
        billValue={billValue}
        friend1Tip={friend1Tip}
        friend2Tip={friend2Tip}
      />
      {(billValue || friend1Tip || friend2Tip) > 0 && (
        <button onClick={handleReset}>Reset</button>
      )}
    </div>
  );
}

// Input box component
function InputBox({ billValue, handleBillValue }) {
  // handle value change
  function handleValueChange(e) {
    handleBillValue(e.target.value);
  }
  return (
    <input
      type="text"
      value={billValue}
      onChange={(e) => handleValueChange(e)}
    />
  );
}

// Friend Suggestions component
function FriendSuggestions({ children, onTipSelect }) {
  // handle tip selection
  function handleTipChange(e) {
    onTipSelect(e.target.value);
  }
  return (
    <div>
      {children}
      <select onChange={(e) => handleTipChange(e)}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}

// Tip message component
function TipMessage({ billValue, friend1Tip, friend2Tip }) {
  const friend1Tip_billValue = billValue * (friend1Tip / 100);
  const friend2Tip_billValue = billValue * (friend2Tip / 100);
  const totalTip = (friend1Tip_billValue + friend2Tip_billValue) / 2;
  const totalAmount = Number(billValue) + Number(totalTip);

  return (
    <div>
      {billValue > 0 && (
        <h3 className="TipMessage">
          You have to pay ${totalAmount} (${billValue} + ${totalTip} tip)
        </h3>
      )}
    </div>
  );
}
