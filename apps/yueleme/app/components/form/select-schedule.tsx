import type { FunctionComponent } from "react";

import { Select} from "@mantine/core";
import { useControlField } from "remix-validated-form";
import type { ScheduleCardSelect } from "../select/search";
import { SelectItem1 } from "../select/search";

type MyInputProps = {
  name: string;
  label: string;
  placeholder?: string;
  data: ScheduleCardSelect[];
};

export const ScheduleSelect: FunctionComponent<MyInputProps> = ({
  name,
  label,
  data,
  placeholder,
}: MyInputProps) => {
  // const { getInputProps } = useField(name);
  // @ts-ignore

  const [value1, setValue1] = useControlField<string>(name);

  // const a = getInputProps({ id: name });
  return (
    <Select
      name={name}
      value={value1}
      label={label}
      onChange={setValue1}
      placeholder={placeholder}
      itemComponent={SelectItem1}
      data={data}
      searchable
      maxDropdownHeight={400}
      nothingFound="暂无内容"
      filter={(value, item) => {
        console.log("value value", value);
        console.log("item", item);
        if (value == null) {
          return true;
        } else {
          return item.name.toLowerCase().includes(value.toLowerCase().trim());
        }
      }}
    />
  );
};
