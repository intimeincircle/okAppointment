import type { FunctionComponent } from "react";

import { Indicator } from "@mantine/core";
import { Calendar } from "@mantine/dates";

interface MyInputProps {
  value?: Date;
  onChange?: (v: Date) => void;
}

export const StatusCalendar: FunctionComponent<MyInputProps> = ({
  value,
  onChange,
}: MyInputProps) => {
  return (
    <Calendar
      value={value}
      onChange={onChange}
      renderDay={(date) => {
        const day = date.getDate();
        return (
          <Indicator size={6} color="red" offset={8} disabled={day !== 16}>
            <div>{day}</div>
          </Indicator>
        );
      }}
    />
  );
};
