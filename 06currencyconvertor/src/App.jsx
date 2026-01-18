import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(50000);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    if (!currencyInfo[to]) return;
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* CARD */}
      <div
        style={{
          background: "rgba(255,255,255,0.8)",
          padding: "20px",
          borderRadius: "10px",
          width: "320px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Currency Converter</h2>

        <InputBox
          label="From"
          amount={amount}
          onAmountChange={setAmount}
          currencyOptions={options}
          selectCurrency={from}
          onCurrencyChange={setFrom}
        />

        <button style={{ width: "100%" }} onClick={swap}>
          Swap
        </button>

        <InputBox
          label="To"
          amount={convertedAmount}
          currencyOptions={options}
          selectCurrency={to}
          onCurrencyChange={setTo}
        />

        <button style={{ width: "100%" }} onClick={convert}>
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </div>
    </div>
  );
}

export default App;