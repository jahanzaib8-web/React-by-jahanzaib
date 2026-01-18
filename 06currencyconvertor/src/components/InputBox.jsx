function InputBox({
  label,
  amount,
  onAmountChange,
  currencyOptions = [],
  selectCurrency,
  onCurrencyChange,
}) {
  return (
    <div style={{ marginBottom: "12px" }}>
      <label>{label}</label>
      <br />

      <input
        type="number"
        value={amount}
        onChange={(e) =>
          onAmountChange && onAmountChange(Number(e.target.value))
        }
      />

      <br />

      <select
        value={selectCurrency}
        onChange={(e) =>
          onCurrencyChange && onCurrencyChange(e.target.value)
        }
      >
        {currencyOptions.length === 0 ? (
          <option>Loading...</option>  
        ) : (
          currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))
        )}
      </select>
    </div>
  );
}

export default InputBox;
