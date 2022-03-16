import type { FunctionComponent } from "react";

import { NumberInput } from "@mantine/core";
import { useField } from "remix-validated-form";

type MyInputProps = {
  name: string;
  label: string;
  placeholder?: string;
};

export const FormNumberInput: FunctionComponent<MyInputProps> = ({
  name,
  label,
  placeholder,
}: MyInputProps) => {
  const { error, getInputProps } = useField(name);
  return (
    <NumberInput
      name={name}
      error={error}
      label={label}
      placeholder={placeholder}
      {...getInputProps({ id: name })}
    />
  );
};
