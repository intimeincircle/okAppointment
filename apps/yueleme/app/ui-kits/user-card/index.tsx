import type { FunctionComponent } from "react";

import type { OptionDataYuelemeServiceCard } from "@app/yueleme-api";
import { Box, Button, Group, List, Paper, Stack, Text } from "@mantine/core";
import dayjs from "dayjs";
import { useAtom } from "jotai";

import { DatePickerCard } from "~/components/form/date";
import { selectedDateAtom } from "~/ui-kits/user-card/state";

const inputDates = [
  dayjs(new Date()).add(2, "hour").toDate(),
  new Date(),
  dayjs(new Date()).add(1, "hour").toDate(),
];

export const ServiceUserCard: FunctionComponent<{
  data: OptionDataYuelemeServiceCard;
  onFinish?: () => void;
}> = ({ data, onFinish }) => {
  const [count, setDate] = useAtom(selectedDateAtom);

  if (data.record == null) {
    return <Box>404 没有找到该内容</Box>;
  }
  return (
    <Paper shadow="xs" p="md">
      <Group>
        <Stack>
          <Text>{data?.record?.name ?? "title"}</Text>
          <Text>{data?.record?.description?.content ?? "description"}</Text>

          <Text>Paper is the most basic ui component</Text>
          <Text>
            Use it to create cards, dropdowns, modals and other components that
            require background with shadow
          </Text>
        </Stack>

        <Box>
          <DatePickerCard
            value={count.selectedDate}
            onChange={(v) => {
              console.log("vvv", v);
              setDate((c) => ({ ...c, selectedDate: v ? v : undefined }));
            }}
          />
        </Box>
      </Group>
      <>
        {count.selectedDate && (
          <>
            <Box>date: {count.selectedHour}</Box>
            <Box>date: {dayjs(count.selectedDate).format("YYYY-MM-DD")}</Box>

            <List spacing="xs" size="sm" center icon={<></>}>
              {inputDates.map((date) => (
                <List.Item>
                  <Button
                    variant="default"
                    onClick={() => {
                      setDate((c) => ({
                        ...c,
                        selectedHour: dayjs(date).format("HH:mm"),
                      }));
                    }}
                  >
                    {dayjs(date).format("HH:mm")}
                  </Button>
                </List.Item>
              ))}
            </List>
          </>
        )}
      </>
      <Button variant="default" onClick={onFinish}>
        下一步
      </Button>
    </Paper>
  );
};
