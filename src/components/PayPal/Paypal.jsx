import { useState } from "react";

export default function PayPal() {
  const [money, setMoney] = useState(100);
  const [update, setUpdate] = useState("");
  const [getValue, setGetValue] = useState(0);

  const addMoney = () => {
    setMoney(money + getValue);
    setUpdate(`You have added ${getValue}`);
  };

  const subMoney = () => {
    if (!(money < getValue)) {
      setMoney(money - getValue);
      setUpdate(`You have withdrawn ${getValue}`);
    } else {
      setUpdate(`Transaction failed. You can only send £${money}`);
    }
  };

  const changeMoney = (event) => {
    setGetValue(event.target.valueAsNumber);
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
