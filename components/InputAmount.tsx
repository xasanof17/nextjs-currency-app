import { Input } from "./ui/input";
import { Dispatch, SetStateAction } from "react";

type Props = {
  firstAmount: string;
  setFirstAmount: Dispatch<SetStateAction<string>>;
};

const InputAmount = ({ firstAmount, setFirstAmount }: Props) => {
  return (
    <Input
      placeholder="Enter amount:"
      value={firstAmount}
      onChange={(e) => setFirstAmount(e.target.value)}
    />
  );
};

export default InputAmount;
