import type { FunctionComponent } from "react";
import { useMemo } from "react";

import { TimeRangeInput } from "@mantine/dates";
import dayjs from "dayjs";
import { useControlField } from "remix-validated-form";

type MyInputProps = {
  // name: string;
  label: string;
  placeholder?: string;
  defaultValue?: string;
  startName: string;
  endName: string;
};

export const TimeInput: FunctionComponent<MyInputProps> = ({
  startName,
  endName,
  label,
  placeholder,
  defaultValue,
}: MyInputProps) => {
  // const { getInputProps: getInputPropsStart } = useField(startName);
  // const { getInputProps: getInputPropsEnd } = useField(endName);

  // @ts-ignore
  // const startProps = getInputPropsStart({ id: startName });
  // // @ts-ignore
  // const endProps = getInputPropsEnd({ id: endName });

  // const now = new Date();
  // const then = dayjs(now).add(30, "minutes").toDate();
  // const [value, setValue] = useState<[Date, Date]>([now, then]);
  const [value1, setValue1] = useControlField<string>(startName);
  const [value2, setValue2] = useControlField<string>(endName);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const v: [Date, Date] = useMemo(() => {
    return [
      dayjs(`2022-10-28 ${value1}`).toDate(),
      dayjs(`2022-10-28 ${value2}`).toDate(),
    ];
  }, [value1, value2]);
  return (
    <>
      <TimeRangeInput
        name="time"
        label={label}
        value={v}
        onChange={(v) => {
          setValue1(dayjs(v[0]).format("HH:mm"));
          setValue2(dayjs(v[1]).format("HH:mm"));
        }}
        clearable
      />
      <input type="hidden" name={startName} value={value1} />
      <input type="hidden" name={endName} value={value2} />
    </>
  );
};
