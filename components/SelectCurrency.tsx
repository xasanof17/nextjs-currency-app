import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";
import { Dispatch, SetStateAction } from "react";

type Props = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  options: string[];
};

const SelectCurrency = (props: Props) => {
  const { value, setValue, options } = props;

  return (
    <Select onValueChange={(newValue) => setValue(newValue)}>
      <SelectTrigger>
        <SelectValue placeholder={value} />
      </SelectTrigger>
      <SelectContent>
        {options.map((item, i) => (
          <SelectItem value={item} key={i}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectCurrency;
