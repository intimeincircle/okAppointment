import type { FunctionComponent } from "react";

import { Box, Textarea } from "@mantine/core";
import { useField } from "remix-validated-form";

type MyInputProps = {
  name: string;
  label: string;
  placeholder?: string;
};

export const FormTextarea: FunctionComponent<MyInputProps> = ({
  name,
  label,
  placeholder,
}: MyInputProps) => {
  const { error, getInputProps } = useField(name);

  return <Box>{}</Box>;
};
