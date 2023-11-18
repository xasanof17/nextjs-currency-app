"use client";

import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

type CurrencyContextType = {
  fromCurrency: string;
  setFromCurrency: Dispatch<SetStateAction<string>>;
  toCurrency: string;
  setToCurrency: Dispatch<SetStateAction<string>>;
  firstAmount: string;
  setFirstAmount: Dispatch<SetStateAction<string>>;
};

const defaultValue: CurrencyContextType = {
  fromCurrency: "USD",
  setFromCurrency: () => "",
  toCurrency: "UZS",
  setToCurrency: () => "",
  firstAmount: "1",
  setFirstAmount: () => "",
};

export const CurrencyContext = createContext(defaultValue);

type Props = {
  children: ReactNode;
};

const CurrencyProvider = ({ children }: Props) => {
  const [fromCurrency, setFromCurrency] = useState<string>(
    defaultValue.fromCurrency
  );
  const [toCurrency, setToCurrency] = useState<string>(defaultValue.toCurrency);
  const [firstAmount, setFirstAmount] = useState<string>(
    defaultValue.firstAmount
  );

  const contextValue: CurrencyContextType = {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    firstAmount,
    setFirstAmount,
  };

  return (
    <CurrencyContext.Provider value={contextValue}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;
