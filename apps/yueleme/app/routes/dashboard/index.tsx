import type { ReactElement } from "react";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import type {
  NoSqlPagingListDataPageMarkYuelemeAppointment,
  OptionDataKunUser,
} from "@app/yueleme-api";
import { Anchor, Box, Container } from "@mantine/core";

import { StatusCalendar } from "~/components/form/calendar-status";
import { Scaffold } from "~/components/scaffold";
import { PageSection } from "~/components/section";
import { EnumPage } from "~/components/sidebar";
import { yuelemeApi } from "~/server/api/api-yueleme";
import { handleAuthentication } from "~/utils/getAuth";

export const loader: LoaderFunction = handleAuthentication(async (a, t) => {
  const r1: OptionDataKunUser =
    await yuelemeApi.getApiYuelemeV1TapirHorseLoginUser({
      authorization: t,
    });

  if (r1.record != null) {
    const r444 = await yuelemeApi.getApiYuelemeV1YuelemeAppointment({
      tutorId: r1.record.userId,
      authorization: t,
    });

    console.log("r4444", r444);
    return r444;
  }
});

export default function DashboardPage(): ReactElement {
  const data = useLoaderData<NoSqlPagingListDataPageMarkYuelemeAppointment>();

  return (
    <Scaffold hasSidebar page={EnumPage.Dashboard}>
      <PageSection title="看板资料">
        <Container size="md" mx="inherit">
          <Box>
            {data?.records?.map((r) => (
              <Box>
                {r.id}
                <Anchor href={`/appointment/${r.id}`} target="_blank">
                  {" "}
                  {r.status}{" "}
                </Anchor>
                {r.fromTime}
                {r.note}
              </Box>
            ))}
          </Box>
          <StatusCalendar />
          <Box>dashboard {JSON.stringify(data)}</Box>;
        </Container>
      </PageSection>
    </Scaffold>
  );
}
