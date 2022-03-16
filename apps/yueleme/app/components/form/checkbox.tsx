import type { FunctionComponent } from "react";
import { useMemo } from "react";

import { Switch } from "@mantine/core";
import { useControlField } from "remix-validated-form";

type MyInputProps = {
  name: string;
  label: string;
  placeholder?: string;
  defaultValue?: string;
  onChange?: (v: "on" | "off") => void;
};

export const FormSwitch: FunctionComponent<MyInputProps> = ({
  name,
  label,
  placeholder,
  defaultValue,
  onChange,
}: MyInputProps) => {
  const [value2, setValue2] = useControlField<string>(name);
  const a1 = useMemo(() => (value2 === "on" ? ["on"] : []), [value2]);

  return (
    <>
      <input type="hidden" value={value2} name={name} />
      <Switch.Group
        value={a1}
        onChange={(v) => {
          if (v.length === 0) {
            setValue2("off");
            onChange?.("off");
          } else {
            setValue2("on");
            onChange?.("on");
          }
        }}
      >
        <Switch value="on" label={label} />
      </Switch.Group>
    </>
  );
};
