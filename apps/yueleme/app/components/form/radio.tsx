import type { FunctionComponent } from "react";

import { NumberInput, Radio } from "@mantine/core";
import { useField } from "remix-validated-form";

type MyInputProps = {
  name: string;
  label: string;
  description?: string;
  placeholder?: string;

  dataList: {
    value: string;
    label: string;
  }[];
};

export const FormRadioInput: FunctionComponent<MyInputProps> = ({
  name,
  label,
  description,
  placeholder,
  dataList,
}: MyInputProps) => {
  const { error, getInputProps } = useField(name);

  // @ts-ignore
  const a = getInputProps({ id: name });
  console.log("aaaaaa", a);

  return (
    <Radio.Group
      // @ts-ignore
      {...getInputProps({ id: name })}
      name={name}
      label={label}
      description={description}
      withAsterisk
    >
      {dataList.map((r) => (
        <Radio value={r.value} label={r.label} />
      ))}
    </Radio.Group>
  );
};
