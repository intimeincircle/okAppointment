import type { FunctionComponent } from "react";

import { createStyles } from "@mantine/core";
import { Calendar } from "@mantine/dates";

const useStyles = createStyles((theme) => ({
  outside: {
    opacity: 0,
  },

  weekend: {
    color: `${theme.colors.blue[6]} !important`,
  },
}));

interface Props {
  onChange?(value: Date | null): void;
  value: Date | undefined;
}
export const DatePickerCard: FunctionComponent<Props> = ({
  onChange,
  value,
}) => {
  const { classes, cx } = useStyles();

  return (
    <Calendar
      value={value}
      disableOutsideEvents
      initialMonth={new Date(2021, 7)}
      onChange={onChange}
      dayClassName={(date, modifiers) =>
        cx({
          [classes.outside]: modifiers.outside,
          [classes.weekend]: modifiers.weekend,
        })
      }
    />
  );
};
