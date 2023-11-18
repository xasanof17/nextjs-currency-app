"use client";

import { Button } from "./ui/button";
import { Dispatch, SetStateAction } from "react";
import { TbArrowsExchange } from "react-icons/tb";

type Props = {
  fromCurrency: string;
  setFromCurrency: Dispatch<SetStateAction<string>>;
  toCurrency: string;
  setToCurrency: Dispatch<SetStateAction<string>>;
};

const SwitchCurrency = (props: Props) => {
  const { fromCurrency, setFromCurrency, toCurrency, setToCurrency } = props;
  const handeSwitch = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <Button onClick={() => handeSwitch()} autoFocus={false}>
      <TbArrowsExchange className="h-6 w-6" />
    </Button>
  );
};

export default SwitchCurrency;
