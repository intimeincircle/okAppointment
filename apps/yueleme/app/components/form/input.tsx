import type { FunctionComponent } from "react";

import { TextInput } from "@mantine/core";
import { useControlField, useField } from "remix-validated-form";

type MyInputProps = {
  name: string;
  label: string;
  placeholder?: string;
  defaultValue?: string;
};

export const FormInput: FunctionComponent<MyInputProps> = ({
  name,
  label,
  placeholder,
  defaultValue,
}: MyInputProps) => {
  const { error, getInputProps } = useField(name);
  return (
    <TextInput
      error={error}
      label={label}
      defaultValue={defaultValue}
      placeholder={placeholder}
      {...getInputProps({ id: name })}
    />
  );
};

export const FormControlledInput: FunctionComponent<MyInputProps> = ({
  name,
  label,
  placeholder,
  defaultValue,
}: MyInputProps) => {
  const [value1, setValue] = useControlField<string>(name);

  const { error, getInputProps } = useField(name);

  return (
    <TextInput
      error={error}
      label={label}
      defaultValue={value1}
      placeholder={placeholder}
      {...getInputProps({ id: name })}
      onChange={(v) => {
        setValue(v.target.value);
      }}
    />
  );
};
