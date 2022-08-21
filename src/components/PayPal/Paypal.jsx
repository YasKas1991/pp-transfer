import { useState } from "react";

export default function PayPal() {
  const [money, setMoney] = useState(100);
  const [update, setUpdate] = useState("");
  const [test, setTest] = useState(0);

  const addMoney = () => {
    setMoney(money + setTest);
    setUpdate(`You have added ${changeMoney}`);
  };

  const subMoney = () => {
    setMoney(money - setTest);
    setUpdate(`You have withdrawn ${changeMoney}`);
  };

  const changeMoney = (event) => {
    setTest(event.target.valueAsNumber);
  };

  return (
    <div>
      <div>
        <h1>PayPal</h1>
        <h2>{`£${money}`}</h2>
        <input
          type="number"
          placeholder="Enter Amount"
          onChange={changeMoney}
        />
        <div>
          <button type="submit" onClick={subMoney}>
            Withdraw
          </button>
          <button type="submit" onClick={addMoney}>
            Add Money
          </button>
        </div>
        <label htmlFor="update">{update}</label>
      </div>
    </div>
  );
}
