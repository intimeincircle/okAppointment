import type { FunctionComponent } from "react";
import { useState } from "react";

import { Avatar } from "@mantine/core";
import { useField } from "remix-validated-form";

import UploadButton from "~/components/upload";

interface Props {
  name: string;
  defaultValue?: string;
}
export const InputAvator: FunctionComponent<Props> = ({
  name,
  defaultValue,
}: Props) => {
  const { error, validate, getInputProps } = useField(name);
  const [s, setValue] = useState(defaultValue);
  return (
    <>
      <input
        type="hidden"
        {...getInputProps({
          id: name,
          value: s,
        })}
      />
      <Avatar radius="xl" src={`https://file.xunlianying.vip/${s}`} />
      <UploadButton
        value={s ?? ""}
        onOk={(v1) => {
          setValue(v1);
          validate();
        }}
      />
      {error && <span className="my-error-class">{error}</span>}
    </>
  );
};
