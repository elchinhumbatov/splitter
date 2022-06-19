import React, { useState, createContext } from "react";

const InputValuesContext = createContext(null);

const InputValuesProvider = ({ children }) => {
  const [resetValues, setResetValues] = useState(false);
  const [billPrice, setBillPrice] = useState("");
  const [tipPercent, setTipPercent] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");

  return (
    <InputValuesContext.Provider
      value={{
        billPrice,
        tipPercent,
        numberOfPeople,
        resetValues,
        setBillPrice,
        setTipPercent,
        setNumberOfPeople,
        setResetValues,
      }}
    >
      {children}
    </InputValuesContext.Provider>
  );
};

export { InputValuesProvider, InputValuesContext };
